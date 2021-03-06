import Input from '../../../../Common/Inputs/Input';
import MessageWindow from '../../../../Common/MessageWindow/MessageWindow';
import React from 'react';
import useCreateChatForm from './useCreateChatForm';

type PropType = {
  isOpened?: boolean;
  toggleOpen: (state: boolean) => void;
};

const CreateChat: React.FC<PropType> = function ({ isOpened, toggleOpen }) {
  const formik = useCreateChatForm(close);

  function close() {
    formik.resetForm();
    toggleOpen(false);
  }

  return (
    <MessageWindow toggleOpen={toggleOpen} isOpened={isOpened}>
      <h3>Создать чат</h3>
      <form className="chat-create" onSubmit={formik.handleSubmit}>
        <Input
          name="name"
          error={formik.errors.name}
          touched={formik.touched.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          placeholder="Название"
        />
        <div className="window-buttons flex-container">
          <button
            type="button"
            onClick={close}
            className="invisible-button-second gray-gradient-link"
          >
            Отмена
          </button>
          <button
            type="submit"
            className="invisible-button-second gradient-text"
          >
            Готово
          </button>
        </div>
      </form>
    </MessageWindow>
  );
};

export default CreateChat;
