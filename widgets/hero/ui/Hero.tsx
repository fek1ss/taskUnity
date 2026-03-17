import Image from "next/image";
import styles from './Hero.module.scss';


const Hero = ()=> {
  return (
    <div className={styles.hero}>
      <Image
        src="/images/enactus-mascot.png"
        width={157}
        height={190} 
        alt="Picture of the author"
      />
      <p className={styles.text}>
        На этой странице находится канбан-доска вашего отдела. Менеджеры создают задачи, а <br />
        вы должны перетаскивать их по статусам: <b>К исполнению → В процессе → Готово</b> по <br />
        мере выполнения. Выполняйте задачи вовремя, чтобы команда работала эффективно.
      </p>
    </div>
  )
}

export default Hero;

