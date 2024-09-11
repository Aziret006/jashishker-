"use client";
import Haeder from "@/components/Haeder/Haeder";
import s from "./page.module.scss";
import Footer from "@/components/Footer/Footer";
import { useRef, useState } from "react";
import { InputMask } from "@react-input/mask";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import TrText from "@/components/TrText/TrText";

const regions = ["Чуй", "Ош", "Иссык-Куль", "Жалал-Абад", "Нарын", "Баткен"];

const activityTypes = [
  "Сельское хозяйство, лесное хозяйство, охота и рыболовство",
  "Обрабатывающие производства (обрабатывающая промышленность)",
  "Строительство",
  "Оптовая и розничная торговля; ремонт автомобилей и мотоциклов",
  "Транспортная деятельность и хранение грузов",
  "Деятельность гостиниц и ресторанов",
  "Финансовое посредничество и страхование",
  "Профессиональная, научная и техническая деятельность",
  "Образование",
  "Искусство, развлечения и отдых",
];

const companyTypes = [
  { value: "ИП", label: "ИП" },
  { value: "ОсОО", label: "ОсОО" },
  { value: "КФХ", label: "КФХ (Крестьянское (фермерское) хозяйство)" },
  {
    value: "СПК",
    label: "СПК (Сельскохозяйственный производственный кооператив)",
  },
  { value: "ЗАО", label: "ЗАО" },
  { value: "КТ", label: "КТ" },
];

const Page = () => {
  const [from, setFrom] = useState({
    photo: null,
    full_name: null,
    activity_type: null,
    email: null,
    phone: null,
    region: null,
    identification_document: null,
    date_of_birth: null,
    activity_category: null,
    company_registration: null,
    full_company_name: null,
    commercial_name: null,
  });
  const [photoUrl, setPhotoUrl] = useState(null);
  const photoRef = useRef();

  const onChangeInputFille = (e) => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);

    setFrom({ ...from, photo: file });
    setPhotoUrl(url);
  };

  const handleRegionChange = (event) => {
    setFrom({ ...from, region: event.target.value });
  };

  const handleActivityTypeChange = (event) => {
    setFrom({ ...from, activity_type: event.target.value });
  };

  const handleCompanyRegistrationChange = (event) => {
    setFrom({ ...from, company_registration: event.target.value });
  };
  const hanfleidentification_document = (event) => {
    setFrom({ ...from, identification_document: event.target.files[0] });
  };

  const [errors, setErrors] = useState({});

  const handleSubmit = async () => {
    const newErrors = {};
    for (const field in from) {
      if (from[field] === null || from[field] === undefined) {
        newErrors[field] = "Поле обязательно для заполнения";
      }
    }

    if (Object.keys(newErrors).length > 0) {
      toast.error("Поле обязательно для заполнения");
      setErrors(newErrors);
    } else {
      const From = new FormData();
      From.append("photo", from.photo);
      From.append("full_name", from.full_name);
      From.append("activity_type", from.activity_type);
      From.append("email", from.email);
      const newFormat = from.phone
        .replace(/\D+/g, "")
        .replace(/^(\d{3})(\d{3})(\d{3})(\d{3})$/, "+$1$2$3$4");

      From.append("phone", newFormat);
      From.append("region", from.region);
      From.append("identification_document", from.identification_document);
      From.append("date_of_birth", from.date_of_birth);
      From.append("activity_category", from.activity_category);
      From.append("company_registration", from.company_registration);
      From.append("full_company_name", from.full_company_name);
      From.append("commercial_name", from.commercial_name);

      try {
        const { data } = await axios.post(
          "https://api.jashishker.kg/api/v1/application-form/",
          From,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        setFrom({
          photo: null,
          full_name: null,
          activity_type: null,
          email: null,
          phone: null,
          region: null,
          identification_document: null,
          date_of_birth: null,
          activity_category: null,
          company_registration: null,
          full_company_name: null,
          commercial_name: null,
        });

        setPhotoUrl(null);
        toast.success("Ваша заявка успешно отправлена");
        setErrors({});
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } catch (error) {
        console.error("Error:", error.response.data);
        toast.error("Ваша заявка не была отправлена");
        setErrors(error.response.data);
      }
    }
  };
  return (
    <div>
      <ToastContainer
        autoClose={3000}
        limit={1}
        hideProgressBar
        newestOnBottom={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        position="bottom-center"
        theme="dark"
      />
      <Haeder />
      <div className={s.content}>
        <div className={s.titelContent}>
          <h1>База данных молодых предпринимателей</h1>
          <div className={s.BlockFrom}>
            <div className={s.BlockFromInputList}>
              <div className={s.imageFroom}>
                <span className={s.Profil}>
                  {photoUrl ? (
                    <img src={photoUrl} alt="" />
                  ) : (
                    <span>
                      <svg
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M24.3172 21.74C24.1172 21.72 23.8772 21.72 23.6572 21.74C18.8972 21.58 15.1172 17.68 15.1172 12.88C15.1172 7.98 19.0772 4 23.9972 4C28.8972 4 32.8772 7.98 32.8772 12.88C32.8572 17.68 29.0772 21.58 24.3172 21.74Z"
                          stroke="#292D32"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M14.3175 29.12C9.4775 32.36 9.4775 37.64 14.3175 40.86C19.8175 44.54 28.8375 44.54 34.3375 40.86C39.1775 37.62 39.1775 32.34 34.3375 29.12C28.8575 25.46 19.8375 25.46 14.3175 29.12Z"
                          stroke="#292D32"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                  )}
                </span>
                <p onClick={() => photoRef.current.click()}>Добавить фото</p>
                <input
                  type="file"
                  onChange={onChangeInputFille}
                  ref={photoRef}
                  style={{ display: "none" }}
                />
                {errors.photo && (
                  <span className={s.error}>{errors.photo}</span>
                )}
              </div>
              <div className={s.labelList}>
                <label>
                  <p>ФИО</p>
                  <input
                    type="text"
                    placeholder="Иванов Иван Иванович"
                    onChange={(e) =>
                      setFrom({ ...from, full_name: e.target.value })
                    }
                  />
                  {errors.full_name && (
                    <p className={s.error}>{errors.full_name}</p>
                  )}
                </label>
                <label>
                  <p>DD/MM/YY</p>
                  <input
                    type="date"
                    placeholder="DD/MM/YY"
                    onChange={(e) =>
                      setFrom({ ...from, date_of_birth: e.target.value })
                    }
                  />
                  {errors.date_of_birth && (
                    <p className={s.error}>{errors.date_of_birth}</p>
                  )}
                </label>
                <label>
                  <p>Номер телефона</p>
                  <InputMask
                    placeholder="Номер телефона"
                    type="text"
                    replacement={{ _: /\d/ }}
                    mask="+996 (___) ___-___"
                    value={from.phone}
                    onChange={(e) =>
                      setFrom({ ...from, phone: e.target.value })
                    }
                  />
                  {errors.phone && <p className={s.error}>{errors.phone}</p>}
                </label>
                <label>
                  <p>E-Mail</p>
                  <input
                    type="text"
                    placeholder="E-Mail"
                    onChange={(e) =>
                      setFrom({ ...from, email: e.target.value })
                    }
                  />
                  {errors.email && <p className={s.error}>{errors.email}</p>}
                </label>
                <label>
                  <p>Регион</p>
                  <div>
                    {regions.map((region, index) => (
                      <label key={index} className={s.regionLabel}>
                        <input
                          type="radio"
                          name="region"
                          value={region}
                          checked={from.region === region}
                          onChange={handleRegionChange}
                        />
                        {region}
                      </label>
                    ))}
                  </div>
                  {errors.region && <p className={s.error}>{errors.region}</p>}
                </label>
                <label>
                  <p>Приложить удостоверение личности</p>
                  <input
                    type="file"
                    placeholder="Приложить удостоверение личности"
                    onChange={(e) => hanfleidentification_document(e)}
                  />
                  {errors.identification_document && (
                    <p className={s.error}>{errors.identification_document}</p>
                  )}
                </label>
                <label>
                  <p>Вид экономической деятельности</p>
                  <div>
                    {activityTypes.map((type, index) => (
                      <label key={index} className={s.activityLabel}>
                        <input
                          type="radio"
                          name="activity_type"
                          value={type}
                          checked={from.activity_type === type}
                          onChange={handleActivityTypeChange}
                        />
                        {type}
                      </label>
                    ))}
                  </div>
                  {errors.activity_type && (
                    <p className={s.error}>{errors.activity_type}</p>
                  )}
                </label>
                <label className={s.fromLabelTitle}>
                  <p>
                    Жогоруда тандалган компанияңыздын экономикалык
                    ишмердүүлүгүнүн түрүнүн категориясын жазыңыз / Напишите
                    категорию вида экономической деятельности вашей компании*
                  </p>
                  <span>
                    Мисалы, выращивание многолетних культур - бул сельское
                    хозяйство, лесное хозяйство, охота и рыболовство
                    экономикалык ишмердүүлүктүн категорияларынын бири. Демек,
                    бул суроого выращивание многолетних культур жооп болушу
                    мүмкүн.
                  </span>
                  <span>
                    Например, выращивание многолетних культур является одной из
                    категорий вида экономической деятельности сельское
                    хозяйство, лесное хозяйство, охота и рыболовство. Таким
                    образом, в ответе для этого вопроса можно написать
                    выращивание многолетних культур.
                  </span>
                  <input
                    type="text"
                    placeholder="Мой ответ"
                    onChange={(e) =>
                      setFrom({ ...from, activity_category: e.target.value })
                    }
                  />
                  {errors.activity_category && (
                    <p className={s.error}>{errors.activity_category}</p>
                  )}
                </label>

                <label>
                  <p>Юридическая регистрация компании</p>
                  <div>
                    {companyTypes.map((companyType, index) => (
                      <label key={index} className={s.companyTypeLabel}>
                        <input
                          type="radio"
                          name="company_registration"
                          value={companyType.value}
                          checked={
                            from.company_registration === companyType.value
                          }
                          onChange={handleCompanyRegistrationChange}
                        />
                        {companyType.label}
                      </label>
                    ))}
                    {from.company_registration === "Other" && (
                      <input
                        type="text"
                        placeholder="Введите другой тип"
                        onChange={(e) =>
                          setFrom({
                            ...from,
                            custom_company_registration: e.target.value,
                          })
                        }
                      />
                    )}
                    {errors.company_registration && (
                      <p className={s.error}>{errors.company_registration}</p>
                    )}
                  </div>
                </label>
                <label>
                  <p>Полное фирменное наименование компании*</p>
                  <input
                    placeholder="Полное фирменное наименование компании"
                    type="text"
                    onChange={(e) =>
                      setFrom({ ...from, full_company_name: e.target.value })
                    }
                  />
                  {errors.full_company_name && (
                    <p className={s.error}>{errors.full_company_name}</p>
                  )}
                </label>
                <label>
                  <p>Коммерческое определение компании</p>
                  <input
                    placeholder="Коммерческое определение компании"
                    type="text"
                    onChange={(e) =>
                      setFrom({ ...from, commercial_name: e.target.value })
                    }
                  />
                  {errors.company_definition && (
                    <p className={s.error}>{errors.commercial_name}</p>
                  )}
                </label>
                <button onClick={() => handleSubmit()}>Отправить</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
