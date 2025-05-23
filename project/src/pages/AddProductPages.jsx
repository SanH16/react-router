import React from "react";
import { useForm } from "react-hook-form";

function AddProductPages() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input defaultValue="test" {...register("example")} />

        {/* include validation with required or other standard HTML validation rules */}
        <input {...register("exampleRequired", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <input {...register("contohlain", { required: "error contoh" })} />
        {/* errors will return when field validation fails  */}
        {errors.contohlain && <span>{errors.contohlain.message}</span>}

        <input type="submit" />
      </form>
    </>
  );
}

export default AddProductPages;
