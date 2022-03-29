import { FC, useState } from "react";
import { RegisterProps } from "./register.t";
import { Wrapper } from "./register.e";
import { NavBar } from "../../components";
import profile_img from "../../assets/images/register/Ellipse 6.png";
import Dropzone from "./drozone/dropzone";
import TopButton from "../../components/common/top-button/top-button";

const Register: FC<RegisterProps> = () => {
  const [registerData, setRegisterData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    university: "",
  });
  console.log(registerData);
  return (
    <Wrapper>
      <NavBar isLanding={false} userExist={false} bg="#e5e5e5" />
      <div className="about_page">
        <h1 className="title">Profil ma’lumotlari</h1>
        <h4 className="info">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis.
        </h4>
      </div>
      <form>
        <div className="item">
          <div className="name">
            F.I.Sh<span className="asterics">*</span>
            <div className="example">Ex John Smith</div>
          </div>
          <div className="inputs">
            <input
              type="text"
              placeholder="Ismingiz"
              required
              value={registerData.firstName}
              onChange={(e) =>
                setRegisterData((prev) => ({
                  ...prev,
                  firstName: e.target.value,
                }))
              }
            />
            <input
              type="text"
              placeholder="Familiyangiz"
              required
              value={registerData.lastName}
              onChange={(e) =>
                setRegisterData((prev) => ({
                  ...prev,
                  lastName: e.target.value,
                }))
              }
            />
          </div>
        </div>
        <div className="item">
          <div className="name">
            Email<span className="asterics"> *</span>
          </div>
          <div className="inputs">
            <input
              type="email"
              placeholder="Email manzilingiz"
              required
              value={registerData.email}
              onChange={(e) =>
                setRegisterData((prev) => ({
                  ...prev,
                  email: e.target.value,
                }))
              }
            />
            <input
              type="number"
              placeholder="Telefon raqamingiz "
              required
              value={registerData.phone}
              onChange={(e) =>
                setRegisterData((prev) => ({
                  ...prev,
                  phone: e.target.value,
                }))
              }
            />
            <input
              type="text"
              placeholder="Universtitet nomi "
              required
              value={registerData.university}
              onChange={(e) =>
                setRegisterData((prev) => ({
                  ...prev,
                  university: e.target.value,
                }))
              }
            />
          </div>
        </div>
        <div className="item">
          <div className="name">
            Fotosurat <span className="asterics"> *</span>
          </div>
          <div className="inputs">
            <div className="profile">
              <img src={profile_img} alt="sd" className="profile_img" />
            </div>
          </div>
        </div>
        <div className="item">
          <div className="name">
            Talaba ID<span className="asterics"> *</span>
          </div>
          <Dropzone />
        </div>
        <div className="buttons">
          <button>Bekor qilish</button>
          <button type="submit" onClick={() => console.log(registerData)}>
            Akkount yaratish
          </button>
        </div>
      </form>
      <TopButton />
    </Wrapper>
  );
};

export default Register;
