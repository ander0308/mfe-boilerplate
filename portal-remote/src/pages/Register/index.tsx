import { useForm, Controller } from "react-hook-form";
// import { DevTool } from "@hookform/devtools";

import Button from "../../components/Button";

import styles from "./styles.module.scss";

const Register = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      nome: "",
      email: "",
      senha: "",
    },
    mode: "onTouched",
  });

  return (
    <form
      className={styles.container}
      onSubmit={handleSubmit((values) => console.log(values))}
    >
      <h1 className={styles.h1}>Register</h1>

      {/* <div>
        <span>Nome:</span>
        <input type="text" {...register("nome")} />
      </div>

      <div>
        <span>Email:</span>
        <input type="text" {...register("email")} />
      </div> */}

      <Controller
        control={control}
        name="senha"
        render={({ field }) => (
          <div>
            <span>Senha:</span>
            <input type="password" {...field} />
          </div>
        )}
      />

      {/* <div>
        <span>Confirma Senha:</span>
        <input name="confirmaSenha" type="password" />
      </div> */}

      <Button type="submit">Cadastrar</Button>
      {/* <DevTool control={control} /> */}
    </form>
  );
};

export default Register;
