import Layout from "@/components/layout/Layout";
import React from "react";
import styles from "./About.module.scss";
import chevronDown from "public/chevron-down.svg";
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import Image from "next/image";

const AccordionItem = ({ header, ...rest }) => (
  <Item
    {...rest}
    header={
      <>
        {header}
        <Image
          className={styles.chevron}
          src={chevronDown}
          alt="Chevron Down"
        />
      </>
    }
    className={styles.item}
    buttonProps={{
      className: ({ isEnter }) =>
        `${styles.itemBtn} ${isEnter && styles.itemBtnExpanded}`,
    }}
    contentProps={{ className: styles.itemContent }}
    panelProps={{ className: styles.itemPanel }}
  />
);

export default function About() {
  return (
    <Layout
      title="About"
      description="Частный приют для животных «Happy pet» был основан в 2014 году в селе Фасова, Макаровского района, Киевской области на базе общественной организации «Зооцентр «Ковчег» Оноприенко Галиной Федоровной и построен за ее собственные средства. Галина Федоровна является владельцем приюта и его директором."
      keywords="Оноприенко Галина Федоровна"
    >
      <main className={styles.about}>
        <div className={styles.container}>
          <section className={styles.info}>
            <div className={styles.infoWrapper}>
              <div className={styles.infoLeft}>
                <h2 className={styles.infoTitle}>О нас</h2>
              </div>
              <div className={styles.infoRight}>
                <p className={styles.infoText}>
                  Частный приют для животных «Happy pet» был основан в 2014 году
                  в селе Фасова, Макаровского района, Киевской области на базе
                  общественной организации «Зооцентр «Ковчег» Оноприенко Галиной
                  Федоровной и построен за ее собственные средства. Галина
                  Федоровна является владельцем приюта и его директором.
                </p>
                <p className={styles.infoText}>
                  На данный момент в приюте проживают около 1000 животных:
                  собаки, коты, обезьяны, грызуны, попугаи и рептилии. Их
                  количество постепенно увеличивается.
                </p>
              </div>
            </div>
            <div className={styles.infoWrapper}>
              <div className={styles.infoLeft}>
                <h2 className={styles.infoTitle}>
                  Жизнь после полномасштабного вторжения
                </h2>
              </div>
              <div className={styles.infoRight}>
                <p className={styles.infoText}>
                  Положение приюта было довольно затруднительным и до начала
                  полномасштабной войны из-за очень большого количества
                  воспитанников. А весной этого он попал под российские обстрелы
                  - от снарядов загорелись вольеры. Некоторые помещения были
                  уничтожены огнем, часть животных погибла, но многих из них все
                  же удалось спасти. После деоккупации Киевщины часть вольеров и
                  других помещений уже удалось отстроить благодаря помощи
                  благотворителей, однако работы еще осталось много.
                </p>
              </div>
            </div>
            <div className={styles.infoWrapper}>
              <div className={styles.infoLeft}>
                <h2 className={styles.infoTitle}>
                  Животные нуждаются в вашей помощи!
                </h2>
              </div>
              <div className={styles.infoRight}>
                <p className={styles.infoText}>
                  Материальная помощь приюту нужна любая и в любом количестве -
                  от мисок и кастрюль до кормов для животных. Здесь будут
                  благодарны даже незначительным пожертвованиям. Также в приюте
                  всегда рады гостям, которые приедут пообщаться с животными,
                  помогут их выгулять, вычесать и просто приласкать.
                </p>
              </div>
            </div>
            <div className={styles.infoWrapper}>
              <div className={`${styles.infoLeft} ${styles.infoFaq}`}>
                <h2 className={styles.infoTitle}>FAQ</h2>
              </div>
              <div className={`${styles.infoRight} ${styles.infoFaq}`}>
                <Accordion
                  className={styles.infoFaq}
                  transition
                  transitionTimeout={200}
                >
                  <AccordionItem header="Как взять у нас хвостика в семью?">
                    <p className={styles.infoFaqText}>
                      Вы выбираете животное по фотографиям, внимательно читайте
                      текст, в тексте мы пишем особенности животного.
                    </p>
                    <p className={styles.infoFaqText}>
                      Далее вы оставляете заявку через нашу корзину-переноску,
                      ждете звонка или сообщения в мессенджер. Мы договариваемся
                      о встрече, знакомстве с животным в оговоренное время и в
                      оговоренном месте. Стоит учесть, что животные могут
                      содержаться на разных передержках и в разных клиниках.
                    </p>
                    <p className={styles.infoFaqText}>
                      После этих процедур заполняется анкета - надо быть готовым
                      ответить на ряд вопросов, а также заранее подготовить всё
                      необходимое для животного (корм, подстилка, игрушки,
                      переноска и прочее). И в конечном итоге вы можете забирать
                      вашего нового питомца.
                    </p>
                  </AccordionItem>

                  <AccordionItem header="Почему за некоторых животных необходимо заплатить?">
                    <p className={styles.infoFaqText}>
                      Мы являемся благотворительным объединением по защите и
                      приюту животных. Большинство животных, которых вы можете
                      забрать, имеют тяжелую судьбу и, соответственно, проблемы
                      со здоровьем.
                    </p>
                    <p className={styles.infoFaqText}>
                      Ветклиники-партнеры идут нам на встречу и лечат,
                      стерилизуют и проводят все необходимые манипуляции с
                      животными в долг. Таких животных очень много и каждый из
                      них имеет свой счет, который необходимо оплатить.
                    </p>
                    <p className={styles.infoFaqText}>
                      Как только на счету благотворительного фонда появляется
                      достаточная сумма - мы оплачиваем счета некоторых
                      животных. В случае, если у животного, которое вам
                      пригляделось, имеется незакрытый счет и вы принимаете
                      решение об адопции, то счет необходимо будет оплатить вам.
                    </p>
                  </AccordionItem>

                  <AccordionItem header="Что если я из другой страны?">
                    <p className={styles.infoFaqText}>
                      Важно понимать, что животное - не посылка, и если вы из
                      другого города, то будьте готовы приехать познакомиться с
                      животным и забрать его домой, организовать его
                      транспортировку!
                    </p>
                    <p className={styles.infoFaqText}>
                      Если вы из другой страны, но готовы стать хозяином, То всё
                      обсуждаемо. Но хозяин должен быть готовым оплатить пакет
                      документов для животного (чип, титры, международный
                      паспорт, справку), а так же выждать время карантина.
                      Вопрос транспортировки (либо у вас есть возможность
                      приехать за животным, либо можно воспользоваться услугами
                      перевозчика, но хозяин несёт расходы за транспортировку!)
                    </p>
                  </AccordionItem>

                  <AccordionItem header="Что еще важно знать?">
                    <p className={styles.infoFaqText}>
                      Все животные проходят стерилизацию/кастрацию, если
                      позволяет возраст и здоровье. Если вы берете щенка или
                      котёнка, то обязуетесь провести стерилизацию, этот вопрос
                      контролируется. Напоминаем, что это бездомные животные,
                      они не несут племенную ценность (даже породистые), а
                      значит не подлежат размножению.
                    </p>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}
