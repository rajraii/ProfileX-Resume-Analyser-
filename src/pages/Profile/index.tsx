import { UserOutlined } from "@ant-design/icons";
import { Avatar, Form, Input } from "antd";
import profil_img from "../../assets/img/profile-page.png";
import Header from "../../components/Header.tsx";
import "./profile.css";
const Profile = () => {
  const tempUser = {
    sub: "116294487116411965235",
    email: "codemakers351@gmail.com",
    email_verified: true,
    given_name: "Codemakers",
    name: "Codemakers",
    locale: "en",
    picture:
      "https://lh3.googleusercontent.com/a/AAcHTtfGuyaqq7-ZRo1cO7bXaae5f2SY2vAF6JTIldTUlI9m=s96-c",
    _id: "64a159f9f311217545e94099",
    __v: 0,
  };
  return (
    <div className="profile-page">
      <Header />

      <div className="profile_wrapper">
        <div className="profile_modal">
          <div className="profile-left">
            <img src={profil_img} alt="profile-side-img" />
          </div>
          <div className="profile-right">
            <Avatar
              src={tempUser?.picture}
              style={{ backgroundColor: "#87d068" }}
              icon={<UserOutlined />}
              size={"large"}
            />
            <Form name="basic" layout="vertical" initialValues={tempUser}>
              <Form.Item label="Name:" name="name">
                <Input />
              </Form.Item>
              <Form.Item label="Email:" name="email">
                <Input />
              </Form.Item>
            </Form>

            <p className="profil-info">Editing User profile is disabled!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
