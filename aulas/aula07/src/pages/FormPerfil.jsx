import {useForm} from "react-hook-form";
import InputSenha from "../components/inputSenha";
import InputEmail from "../components/inputEmail";
import InputNome from "../components/InputNome";

function FormPerfil() {
    const {register, handleSubmit, formState: {errors}} = useForm();

    return (
        <form onSubmit={handleSubmit((data) => {})}>
            <InputNome register={register} error={errors.nome} />
            <InputEmail register={register} error={errors.email} />
            <InputSenha register={register} error={errors.senha} />
            <button>Salvar</button>
         </form>
    )
}
export default FormPerfil;