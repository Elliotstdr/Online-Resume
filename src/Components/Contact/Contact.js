import React, { useRef, useState } from "react";
import "./Contact.scss";
import PropTypes from "prop-types";
import { Dialog } from "primereact/dialog";
import { Controller, useForm } from "react-hook-form";
import { InputTextarea } from "primereact/inputtextarea";
import Loader from "../../Utils/Loader/Loader";
import Bouton from "../../Utils/Bouton/Bouton";
import { InputText } from "primereact/inputtext";
import axios from "axios";
import { Toast } from "primereact/toast";

const Contact = (props) => {
  const [sending, setSending] = useState(false);
  const toast = useRef(null);

  const defaultValues = {
    title: "",
    message: "",
    name: "",
  };

  const {
    control,
    getValues,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ defaultValues });

  const getFormErrorMessage = (name) => {
    return (
      errors[name] && <small className="p-error">{errors[name].message}</small>
    );
  };

  const onSubmit = async () => {
    setSending(true);
    let data = getValues();
    axios
      .post("https://mail.elliotstdr.fr/sendemail", data)
      .then(() =>
        toast.current.show({
          severity: "success",
          summary: "Succès : ",
          detail: "Votre mail a bien été envoyé",
          life: 5000,
        })
      )
      .catch(() =>
        toast.current.show({
          severity: "error",
          summary: "Erreur : ",
          detail:
            "Une erreur est survenue lors de l'envoie du mail. Je vous invite à me contacter sur Linkedin",
          life: 5000,
        })
      )
      .finally(() => {
        reset();
        setSending(false);
      });
  };

  return (
    <Dialog
      visible={props.visible}
      onHide={() => props.setVisible(false)}
      className={"modal modal-bug"}
    >
      <>
        <Toast ref={toast}></Toast>
        <form className="bug__form" onSubmit={handleSubmit(onSubmit)}>
          <div className="bug__form__field">
            <h4>Email :</h4>
            <Controller
              name="name"
              control={control}
              rules={{
                required: "Le mail est obligatoire",
              }}
              render={({ field }) => (
                <InputText
                  type="email"
                  {...field}
                  placeholder="mon-mail@email.com"
                  className="bug__form__field-title"
                />
              )}
            />
            {getFormErrorMessage("name")}
          </div>
          <div className="bug__form__field">
            <h4>Objet :</h4>
            <Controller
              name="title"
              control={control}
              render={({ field }) => (
                <InputText
                  autoResize
                  {...field}
                  className="bug__form__field-message"
                  placeholder="Envie de disctuer ..."
                />
              )}
            />
          </div>
          <div className="bug__form__field">
            <h4>Message :</h4>
            <Controller
              name="message"
              control={control}
              rules={{
                required: "La message est obligatoire",
              }}
              render={({ field }) => (
                <InputTextarea
                  autoResize
                  {...field}
                  className="bug__form__field-message"
                  placeholder="Votre message"
                />
              )}
            />
            {getFormErrorMessage("message")}
          </div>
          <div className="bug__form__button">
            {sending ? (
              <Loader size={"3rem"} />
            ) : (
              <Bouton btnText={"Envoyer"}></Bouton>
            )}
          </div>
        </form>
      </>
    </Dialog>
  );
};

Contact.propTypes = {
  visible: PropTypes.bool,
  setVisible: PropTypes.func,
};

export default Contact;
