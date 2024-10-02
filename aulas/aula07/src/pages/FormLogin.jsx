import {useForm} from "react-hook-form";
import InputSenha from "../components/inputSenha";
import InputEmail from "../components/inputEmail";

function FormLogin() {
    const {register, handleSubmit, formState: {errors}} = useForm();

    return (
        <form onSubmit={handleSubmit((data) => {})}>
            <InputEmail register={register} error={errors.email} />
            <InputSenha register={register} error={errors.senha} />
            <button>Entrar</button>
         </form>
    )
}
export default FormLogin;