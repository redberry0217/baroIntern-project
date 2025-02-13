import Spacer from "../components/ui/Spacer";
import Profile from "../assets/profile.jpg";
import { useState } from "react";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

const MyPage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [nickname, setNickname] = useState("");
  const [preview, setPreview] = useState("");

  /** functions */
  // 이미지 변경
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-[1000px] flex flex-col items-center">
        <Spacer height={100} />
        <h3 className="text-2xl font-bold text-center">마이페이지</h3>
        <Spacer height={30} />
        {isEditing ? (
          <div className="relative">
            <input
              type="file"
              accept="image/*"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              onChange={handleImageChange}
            />
            <img
              src={preview}
              alt="profile"
              className="w-[300px] h-[300px] rounded-full object-cover"
            />
          </div>
        ) : (
          <img
            src={Profile}
            alt="profile"
            className="w-[300px] h-[300px] rounded-full object-cover"
          />
        )}
        <Spacer height={30} />
        <section className="flex flex-col gap-3">
          <div className="w-[300px] h-[74px] bg-blue-100 rounded-lg p-3 flex gap-3 items-center">
            <div className="font-bold w-[30%] text-center text-blue-500">
              아이디
            </div>
            <div className="w-[70%]">박지영</div>
          </div>
          <div className="w-[300px] h-[74px] bg-blue-100 rounded-lg p-3 flex gap-3 items-center">
            <div className="font-bold w-[30%] text-center text-blue-500">
              닉네임
            </div>
            <div className="w-[70%]">
              {isEditing ? (
                <Input
                  type="text"
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                />
              ) : (
                "박지영"
              )}
            </div>
          </div>
        </section>
        <Spacer height={30} />
        <Button
          color="primary"
          type="button"
          onClick={() => setIsEditing(!isEditing)}
          width="w-[300px]"
        >
          {isEditing ? "수정완료" : "정보 수정하기"}
        </Button>
      </div>
    </div>
  );
};

export default MyPage;
