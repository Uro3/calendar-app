import React from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { Schedule, ScheduleDialogState } from '../../types';
import { remove as removeCalendarSchedule } from '../../modules/calendarSchedule';
import { remove as removeSchedule } from '../../modules/schedule';
import { open } from '../../modules/scheduleDialog';
import style from './ScheduleDialog.module.scss';

type Props = {
  close: () => void;
  scheduleId: string;
  year: number;
  month: number;
  date: number;
};

const ScheduleDialogShow: React.FC<Props> = props => {
  const schedule: Schedule = useAppSelector<Schedule>(state => state.schedule[props.scheduleId]);
  const dispatch = useAppDispatch();

  const openEdit = () => {
    const params: ScheduleDialogState = {
      activeDialog: 'EDIT',
      scheduleId: schedule.id
    };
    dispatch(open(params));
  };

  const submitRemove = () => {
    dispatch(removeCalendarSchedule(schedule.calendarDate, schedule.id));
    dispatch(removeSchedule(schedule.id));
    props.close();
  };

  return (
    <div className="modal-card">
      <header className="modal-card-head">
        <p className="modal-card-title">
          予定の確認
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
            <input className="input has-text-dark" type="text" value={schedule.title} disabled />
          </div>
        </div>
        <div className="field">
          <label className="label">開始時刻</label>
          <div className="control">
            <input className="input has-text-dark" type="time" value={schedule.startTime} disabled />
          </div>
        </div>
        <div className="field">
          <label className="label">終了時刻</label>
          <div className="control">
            <input className="input has-text-dark" type="time" value={schedule.endTime} disabled />
          </div>
        </div>
        <div className="field">
          <label className="label">説明</label>
          <div className="control">
            <textarea className="textarea has-text-dark" value={schedule.comment} disabled />
          </div>
        </div>
      </section>
      <footer className="modal-card-foot">
        <button className="button is-success" onClick={openEdit}>編集する</button>
        <button className="button" onClick={props.close}>閉じる</button>
        <button className={`button is-danger ${style.delete_button}`} onClick={submitRemove}>削除する</button>
      </footer>
    </div>
  );
}

export default ScheduleDialogShow;
