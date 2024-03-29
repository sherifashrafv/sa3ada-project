import * as yup from "yup";
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .email("الرجاء كتابة ايميلك بشكل صحيح")
    .required("هذا الحقل مطلوب ادخاله"),
  password: yup
    .string()
    .required("هذا الحقل مطلوب ادخاله")
    .min(5)
    .matches(passwordRules, { message: "الرجاء كتابة باسورد قوي " })
    .required("هذا الحقل مطلوب ادخاله"),
});
export const ProfileSchema = yup.object().shape({
  fullName: yup.string().required("هذا الحقل مطلوب ادخاله"),
  email: yup
    .string()
    .email("الرجاء كتابة الايميل بشكل صحيح ")
    .required("هذا الحقل مطلوب ادخاله"),
  phoneNumber: yup
    .string()
    .required("هذا الحقل مطلوب ادخاله")
    .min(11)
    .max(11, { message: "الرقم يجب ان يكون 11 رقم فقط" })
    .required("هذا الحقل مطلوب ادخاله"),
});

export const RegisterSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "name must be at least 10 characters long")
    .required("Required"),
  email: yup.string().email("Please enter a valid email").required("Required"),
  password: yup
    .string()
    .required("Required")
    .min(5)
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("Required"),
});
export const validateImageType = (value) => {
  if (value) {
    let type = value.match(/[^:]\w+\/[\w-+\d.]+(?=;|,)/)[0];
    return SUPPORTED_FORMATS.includes(type);
  }
};
export const addToCartSchema = yup.object().shape({
  shape: yup.string().required("Required"),
  taste: yup.string().required("Required"),
  typeCk: yup.string().required("Required"),
  inCake: yup
    .string()
    .min(3, "name must be at least 10 characters long")
    .required("Required"),

  inCard: yup
    .string()
    .min(3, "name must be at least 10 characters long")
    .required("Required"),
  image: yup
    .mixed()
    .nullable()
    .required("Required Field")
    .test(
      "size",
      "File size is too big",
      (value) => value && value.size <= 1024 * 1024 // 5MB
    )
    .test(
      "type",
      "Invalid file format selection",
      (value) =>
        // console.log(value);
        !value || (value && SUPPORTED_FORMATS.includes(value?.type))
    ),
});
