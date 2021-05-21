import React from 'react';

type Props = {
  close: () => void;
  year?: number;
  month?: number;
  date?: number;
};

const ScheduleDialogRemove: React.FC<Props> = props => {
  const submit = () => {
    console.log('remove');
    props.close();
  };

  return (
    <div className="modal-card">
      <header className="modal-card-head">
        <p className="modal-card-title">
          予定を削除
        </p>
        <button className="delete" aria-label="close" onClick={props.close}></button>
      </header>
      <section className="modal-card-body">
        <p>
          {props.year}年 {props.month}月 {props.date}日
        </p>
      </section>
      <footer className="modal-card-foot">
        <button className="button is-success" onClick={submit}>削除</button>
        <button className="button" onClick={props.close}>キャンセル</button>
      </footer>
    </div>
  );
}

export default ScheduleDialogRemove;
