import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import deleteIcon from "../../assets/deleteIcon.png";
import plusIcon from "../../assets/plusIcon.png";
import lessIcon from "../../assets/lessIcon.png";

import * as z from "zod";
import {

  ProductImage,
  ProductInfo,
  Title,
  Price,
  QtyCell,
  QtyInput,
  SubtotalCell,
  RemoveBtn,
  Footer,
  FinalizeButton,
  TotalText,
  Container,
  FooterItems,
  Divider,
  BtnLess,
  BtnPlus,
  ProductsGrid,
  HeaderGrid,
  TitleSubtotalCell
} from "./styles";
import type { IMovies } from "../../Service/Movies";
import { useNavigate } from "react-router-dom";
import { useBuy } from "../../Context/BuyProvider";

const schema = z.object({
  quantities: z.record(z.string(), z.number().min(1).max(99)),
});

type FormData = z.infer<typeof schema>;

interface CartProps {
  moviesSelected: IMovies[];
  onRemove: (id: number) => void;
  onQuantityChange?: (id: number, quantity: number) => void;
  onFinalize?: (quantities: Record<string, number>) => void;
}


export function CartComponent({
  moviesSelected,
  onRemove,
  onQuantityChange,
  onFinalize,
}: CartProps) {
  const defaultValues = {
    quantities: moviesSelected.reduce(
      (acc, movie) => ({ ...acc, [movie.id]: 1 }),
      {} as Record<string, number>
    ),
  };

  const navigate = useNavigate();
  const { resetCart } = useBuy();

  const {
    control,
    handleSubmit,
    watch,
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues,
  });


  useEffect(() => {
    moviesSelected.forEach((movie) => {
      if (!(movie.id in watch("quantities"))) {
        setValue(`quantities.${movie.id}`, 1);
      }
    });
  }, [moviesSelected, setValue, watch]);

  const quantities = watch("quantities");

  const formatPrice = (value: number) =>
    value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  const onSubmit = (data: FormData) => {
    if (onFinalize) onFinalize(data.quantities);
  };

  const increaseQty = (id: number) => {
    const current = quantities?.[id] ?? 1;
    if (current < 99) {
      const newQty = current + 1;
      setValue(`quantities.${id}`, newQty);
      onQuantityChange?.(id, newQty);
    }
  };

  const decreaseQty = (id: number) => {
    const current = quantities?.[id] ?? 1;
    if (current > 1) {
      const newQty = current - 1;
      setValue(`quantities.${id}`, newQty);
      onQuantityChange?.(id, newQty);
    }
  };

  const handleFinish = () => {
    resetCart()
    navigate('/Finish')
  }

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <>
          <HeaderGrid>
            <div>PRODUTO</div>
            <div></div>
            <div>QTD</div>
            <div>SUBTOTAL</div>
            <div aria-label="Remover" />
          </HeaderGrid>

          {moviesSelected.map((movie) => {
            const qty = quantities?.[movie.id] ?? 1;
            const subtotal = movie.price * qty;

            return (
              <ProductsGrid key={movie.id}>
                <ProductImage
                  className="image"
                  src={movie.image}
                  alt={movie.title}
                />
                <ProductInfo className="product">
                  <Title>{movie.title}</Title>
                  <Price>{formatPrice(movie.price)}</Price>
                </ProductInfo>
                <QtyCell className="qty">
                  <BtnLess
                    onClick={() => decreaseQty(movie.id)}
                    disabled={qty <= 1}
                    src={lessIcon}
                  />
                  <Controller
                    name={`quantities.${movie.id}`}
                    control={control}
                    render={({ field }) => (
                      <QtyInput
                        type="number"
                        min={1}
                        max={99}
                        {...field}
                        onChange={(e) => {
                          const val = Number(e.target.value);
                          if (val >= 1 && val <= 99) field.onChange(val);
                          else if (e.target.value === "") field.onChange(undefined);
                        }}
                      />
                    )}
                  />
                  <BtnPlus
                    onClick={() => increaseQty(movie.id)}
                    disabled={qty >= 99}
                    src={plusIcon}
                  />
                </QtyCell>
                <SubtotalCell className="subtotal">
                  <TitleSubtotalCell className="subcell">
                    SUBTOTAL
                  </TitleSubtotalCell>

                  {formatPrice(subtotal)}
                </SubtotalCell>
                <RemoveBtn
                  className="remove"
                  src={deleteIcon}
                  onClick={() => onRemove(movie.id)}
                />
              </ProductsGrid>
            );
          })}
        </>

        <Footer className="footer">
          <Divider />
          <FooterItems className="footerItems">
            <FinalizeButton type="submit" onClick={handleFinish}>Finalizar pedido</FinalizeButton>
            <TotalText className="totalText">
              <span> TOTAL</span>
              <span> {formatPrice(
                moviesSelected.reduce((acc, movie) => {
                  const qty = quantities?.[movie.id] ?? 1;
                  return acc + movie.price * qty;
                }, 0)
              )}</span>
            </TotalText>
          </FooterItems>
        </Footer>
      </form>
    </Container>
  );
}