import s from './style.css';

export default function UiChrome({ title = 'Acme Inc. - DatoCMS', children }) {
  return (
    <div className={s.root}>
      <div className={s.bar}>
        <div className={s.barButtons}>
          <div className={s.barButton} />
          <div className={s.barButton} />
          <div className={s.barButton} />
        </div>
        <div className={s.tab}>{title}</div>
        <div className={s.space} />
      </div>
      {children}
    </div>
  );
}
