import Spacer from "../components/ui/Spacer";
import Profile from "../assets/profile.jpg";

const Home = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[1000px] flex flex-col items-center">
        <Spacer height={150} />
        <h3 className="text-2xl font-bold text-center">
          🤔할 수 있는 데까지는 다 해보는 신입 개발자, 박지영입니다!
        </h3>
        <Spacer height={30} />
        <img
          src={Profile}
          alt="profile"
          className="w-[300px] h-[300px] rounded-full object-cover"
        />
        <Spacer height={30} />
        <div className="w-[700px] bg-blue-100 rounded-lg p-5">
          “이 정도면 됐다”가 아니라 “조금만 더 해 보면 될 것 같은데” 하는
          마음으로 프로젝트에 임하는 끈질긴 신입 프론트엔드 개발자, 박지영
          입니다. 모두가 존중받고 함께 성장할 수 있는 협업 문화에 기여 하면서
          기능 구현 그 이상의 가치를 제공하는 개발자가 되고 싶습니다.
        </div>
      </div>
    </div>
  );
};

export default Home;
