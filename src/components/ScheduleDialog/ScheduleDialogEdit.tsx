import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { Schedule } from '../../types';
import { update } from '../../modules/schedule';
import { add as addCalendarSchedule, remove as removeCalendarSchedule } from '../../modules/calendarSchedule';

type Props = {
  close: () => void;
  scheduleId: string;
};

const ScheduleDialogEdit: React.FC<Props> = props => {
  const schedule: Schedule = useAppSelector<Schedule>(state => state.schedule[props.scheduleId]);
  const dispatch = useAppDispatch();

  const [title, setTitle] =  useState(schedule.title);
  const [calendarDate, setCalendarDate] =  useState(schedule.calendarDate);
  const [startTime, setStartTime] =  useState(schedule.startTime);
  const [endTime, setEndTime] =  useState(schedule.endTime);
  const [comment, setComment] =  useState(schedule.comment);

  const onTitleChanged = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.target.value);
  };

  const onCalendarDateChanged = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setCalendarDate(event.target.value);
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
      id: schedule.id,
      calendarDate,
      title,
      comment,
      startTime,
      endTime
    };
    dispatch(update(params));

    if (calendarDate !== schedule.calendarDate) {
      dispatch(removeCalendarSchedule(schedule.calendarDate, schedule.id));
      dispatch(addCalendarSchedule(calendarDate, schedule.id));
    }

    props.close();
  };

  return (
    <div className="modal-card">
      <header className="modal-card-head">
        <p className="modal-card-title">
          予定の編集
        </p>
        <button className="delete" aria-label="close" onClick={props.close}></button>
      </header>
      <section className="modal-card-body">
        <div className="field">
          <label className="label">タイトル</label>
          <div className="control">
            <input className="input" type="text" value={title} onChange={onTitleChanged} />
          </div>
        </div>
        <div className="field">
          <label className="label">日付</label>
          <div className="control">
            <input className="input" type="date" value={calendarDate} onChange={onCalendarDateChanged} />
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
        <button className="button is-success" onClick={submit}>保存</button>
        <button className="button" onClick={props.close}>キャンセル</button>
      </footer>
    </div>
  );
}

export default ScheduleDialogEdit;
