import Spacer from "../components/ui/Spacer";
import Profile from "../assets/profile.jpg";
import { useRef, useState } from "react";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { useReadProfile } from "../hooks/queries/common";
import { useEditProfile } from "../hooks/mutations";

const MyPage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [nickname, setNickname] = useState("");
  const [preview, setPreview] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  /** useQuery */
  const {
    data: profile,
    isPending: isProfileLoading,
    isError: isProfileError,
  } = useReadProfile();

  /** useMutation */
  const { mutate: editProfile } = useEditProfile();

  if (isProfileLoading) {
    return <div>Loading...</div>;
  }

  if (isProfileError) {
    return <div>Error...</div>;
  }

  /** functions */
  // 이미지 클릭
  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  // 이미지 변경
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setFile(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  // [수정하기/수정완료] 버튼 클릭
  const handleEdit = () => {
    if (isEditing) {
      // 수정을 완료하는 경우
      editProfile(
        { nickname, avatar: file },
        {
          onSuccess: () => {
            alert("정보가 수정되었습니다.");
            setIsEditing(false);
          },
          onError: () => {
            alert("정보 수정에 실패했습니다. 다시 시도하세요.");
          },
        }
      );
    } else {
      // 수정을 시작하는 경우
      setIsEditing(true);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-[1000px] flex flex-col items-center">
        <Spacer height={100} />
        <h3 className="text-2xl font-bold text-center">마이페이지</h3>
        <Spacer height={30} />
        {isEditing ? (
          <div className="relative">
            <img
              src={preview || Profile}
              alt="profile"
              className="w-[300px] h-[300px] rounded-full object-cover"
              onClick={handleImageClick}
            />
            <input
              type="file"
              accept="image/*"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              onChange={handleImageChange}
              ref={fileInputRef}
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
            <div className="w-[70%]">{profile?.id}</div>
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
                profile?.nickname
              )}
            </div>
          </div>
        </section>
        <Spacer height={30} />
        <Button
          color="primary"
          type="button"
          onClick={handleEdit}
          width="w-[300px]"
        >
          {isEditing ? "수정완료" : "정보 수정하기"}
        </Button>
      </div>
    </div>
  );
};

export default MyPage;
