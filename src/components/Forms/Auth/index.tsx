import React from "react";
import { useForm } from "react-hook-form";

import labelsContext, { ILabels } from "../../../constants/labels.authform";
import * as S from "./styles";

interface AuthFormProps {
  isLogin?: boolean;
  isRegister?: boolean;
}

export const AuthForm: React.FC<AuthFormProps> = ({ isLogin, isRegister }) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm();

  let labels: ILabels[];

  if (isRegister) labels = labelsContext;
  if (isLogin) {
    labels = labelsContext.filter(
      ({ title }) => title === "Name" || title === "Re-enter Password"
    );
  }

  const onSubmit = (data: object) => {
    console.log("enviando", data);
    return new Promise(() => {
      if (isLogin) {
        console.log(data);
        // resolve();
      }
    });
  };

  console.log(errors);

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      {labels?.map(({ title, type, rules, messages }) => (
        <S.Label key={title}>
          <S.Input
            placeholder={title}
            type={type}
            {...register(title, rules)}
            error={!!errors[title]?.type}
            disabled={isSubmitting}
          />
          {messages.map((error) => (
            <S.ErrorText key={error.type}>
              {errors[title]?.type === error.type && <>{error.message}</>}
            </S.ErrorText>
          ))}
        </S.Label>
      ))}
      <S.Submit type="submit" value="enviar">
        Criar Conta
      </S.Submit>
    </S.Form>
  );
};
