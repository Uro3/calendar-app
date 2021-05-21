import React, { useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { Schedule } from '../../types';
import { add } from '../../modules/schedule';
import { createDateKey } from '../../lib/schedule';

type Props = {
  close: () => void;
  year: number;
  month: number;
  date: number;
};

const ScheduleDialogAdd: React.FC<Props> = props => {
  const dispatch = useAppDispatch();

  const [title, setTitle] =  useState('');
  const [startTime, setStartTime] =  useState(`12:00`);
  const [endTime, setEndTime] =  useState(`13:00`);
  const [comment, setComment] =  useState('');

  const onTitleChanged = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.target.value);
  };

  const onStartTimeChanged = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setStartTime(event.target.value);
    if (endTime < event.target.value) {
      setEndTime(event.target.value);
    }
  };

  const onEndTimeChanged = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setEndTime(event.target.value);
    if (startTime > event.target.value) {
      setStartTime(event.target.value);
    }
  };

  const onCommentChanged = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setComment(event.target.value);
  };

  const submit = () => {
    const params: Schedule = {
      id: `${Math.random()}`,
      dateKey: createDateKey(props.year, props.month, props.date),
      title: title,
      comment: comment,
      startTime: startTime,
      endTime: endTime
    };
    dispatch(add(params))
    props.close();
  };

  return (
    <div className="modal-card">
      <header className="modal-card-head">
        <p className="modal-card-title">
          予定を追加
        </p>
        <button className="delete" aria-label="close" onClick={props.close}></button>
      </header>
      <section className="modal-card-body">
        <p className="block">
          {props.year}年 {props.month}月 {props.date}日
        </p>
        <div className="field">
          <label className="label">タイトル</label>
          <div className="control">
            <input className="input" type="text" value={title} onChange={onTitleChanged} />
          </div>
        </div>
        <div className="field">
          <label className="label">開始時刻</label>
          <div className="control">
            <input className="input" type="time" value={startTime} onChange={onStartTimeChanged} />
          </div>
        </div>
        <div className="field">
          <label className="label">終了時刻</label>
          <div className="control">
            <input className="input" type="time" value={endTime} onChange={onEndTimeChanged} />
          </div>
        </div>
        <div className="field">
          <label className="label">説明</label>
          <div className="control">
            <textarea className="textarea" value={comment} onChange={onCommentChanged}></textarea>
          </div>
        </div>
      </section>
      <footer className="modal-card-foot">
        <button className="button is-success" onClick={submit}>追加</button>
        <button className="button" onClick={props.close}>キャンセル</button>
      </footer>
    </div>
  );
}

export default ScheduleDialogAdd;
