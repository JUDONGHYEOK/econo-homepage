const data = {
    index: ["TMI", "CSRS", "끼룩", "네잎클로버", "오감자", "김가네", "팜터틀", "AIcoholic", "잘가라 회장단."],
    teams: [
        {
            teamName: "TMI",
            teamPeople: "김정인, 채상엽, 나영주, 성윤아",
            projectName: "HoneyBe",
            hashTag: "#AndroidStudio   #SpringBoot   #MongoDB   #Recommendation System   #AWS   #EC2   #전남대학교   #소개팅   #모바일앱",
            subTitle: "꿀벌이 만드는 설레는 세상, 전남대학교 학생들의 새로운 만남을 응원하는 그곳, HoneyBe !",
            idea: `HoneyBe는 취미, 관심사를 기반으로 한 소개팅 어플리케이션입니다. 
            전남대학교 학생들만을 대상으로 제공하는 서비스로 학생들간의 자유롭고 건전한 연애 문화를 지향합니다. 인공지능 기반으로 이상형을 추천하여 사용자의 만족도를 높이고자 하였습니다. 코시국(코로나 상황에) 대학생들이 빼앗긴 낭만을 찾아 설레는 만남으로 가득한 서비스가 되길 기대합니다!`,
            teck: `안드로이드
            Android Studio와 SpringBoot간 통신을 위하여 Http 통신 라이브러리 Retrofit을 이용하였고, 서비스의 실제 배포 후 유지 보수를 고려하여 안드로이드 MVP 패턴을 채택하였습니다.
            인공지능
            딥러닝 기반의 추천 시스템을 개발하였습니다. 콜드 스타트 문제를 해결하기 위해 외부 데이터를 사용한 비지도 학습을 사용하였습니다. 모델 배포를 위해 Amazon Web Service (AWS)를 사용하였습니다.`,
            image: "assets/2022_winter_dev/images/projects/TMI.jpg",
        },
        {
            teamName: "CSRS",
            teamPeople: "김민주, 주동혁, 이서현, 홍동건",
            projectName: "WE:ART",
            hashTag: "#WEB   #ART   #예술품   #경매   #React   #AtomicDesign   #Storybook   #SpringBoot   #SpringDataJPA   #MySQL",
            subTitle: `We are Artist!
            아마추어 예술인들을 위한 작품 경매 사이트, WE:ART`,
            idea: `WE:ART는 “We are Artist!”, 누구든 예술인이 되어 함께 소통할 수 있는 공동의 목표를 담고 있습니다. 예술에 대한 수요와 관심이 커지지만 표현의 기회를 마음껏 누리지 못했던 이들에게 한정된 공간을 넘어 본인의 예술을 마음껏 표현하고 그 작품들을 사람들과 공유할 것을 제안합니다.
            자신의 예술품을 경매에 올려보세요. 예술품들을 관람하며 마음에 드는 경매에 참여해보세요. 예술에 대한 수요를 충족시키고 표현의 한계를 넘은 예술가들의 무대가 열립니다.`,
            teck: `
            컴포넌트의 재사용성을 고려한 Atomic Design을 도입하여 React를 기반으로 프론트엔드 개발하였고, UI 컴포넌트를 독립적으로 테스트할 수 있는 UI 툴 라이브러리인 Storybook을 활용하였습니다.
백엔드는 Spring Boot와 Spring Data JPA를 이용하여 웹 어플리케이션을 개발하였고, 관계형 데이터베이스인 MySQL을 사용하였습니다.`,
            image: "assets/2022_winter_dev/images/projects/we_art.png",
        },
        {
            teamName: "끼룩",
            teamPeople: "박수현, 이승진",
            projectName: "Peace Maker",
            hashTag: "#Peace Maker   #끼룩   #게임   #추리   #카페   #C#   #Unity   #탑다운",
            subTitle: "의문의 사고로 혼수상태에 빠진 주인공이 그의 무의식 세계 안에서 자신을 죽이려고 한 범인을 찾는 게임",
            idea: `한 인간은 살아생전에 두 개의 세계를 경험합니다. 한 세계는 인간이 보며 경험하는 의식의 세계이고, 나머지 한 세계는 인간이 경험할 수 없는 무의식의 세계입니다. 쉽게는, 매일 밤 그들이 꾸는 꿈 이라고 하죠.
            무의식 세계에 도달하기 위해서는 꿈을 꿔야 합니다. 꿈을 꾸게 되는 배경에는 단순히 매일 밤 취하는 수면도 있지만, 그렇지 않은 때도 있습니다.
            이 게임의 주인공은 개인 카페를 운영하고 있는 사장입니다. 사람들의 입소문을 타 운 좋게도 2호점 개업을 앞두고 있었죠. 그러던 어느 날, 누군가가 의도적으로 저지른 사고에 의해 혼수상태에 빠지게 됩니다.
            그렇게 그는 자신의 무의식 세계에 도달합니다.`,
            teck: `Unity를 게임 제작 툴로 사용하였습니다.
            rigidbody2D와 boxcollider2D를 이용해 기본적인 물리를 구현하였으며, Aseprite를 사용하여 게임에 사용될 그래픽 디자인을 작업하였습니다.
            Bool함수와 rayhitscan함수를 이용해 게임 내 오브젝트와 상호작용하였고, Dictionary와 add를 이용해 NPC의 대사를 출력하였습니다.`,
            image: "assets/2022_winter_dev/images/projects/peace_maker.png",
        },
        {
            teamName: "네잎클로버",
            teamPeople: "김시형, 김서하, 임채승, 최명선",
            projectName: "굿데이(GoodDay)",
            hashTag: "#굿데이   #네잎클로버   #MBTI   #IOS   #Swift   #이별극복서포팅",
            subTitle: "이별로 인해 무너진 일상의 회복을 돕는 이별극복 서포팅(Supporting) 어플리케이션",
            idea: `굿데이는 이별로 인해 상처받은 청년들의 아픔을 공감하고, 이들의 일상 회복을 돕고자 하는 마음에서 시작되었습니다. 오랜 기간 사랑해왔던 연인과의 이별은 심각한 대인관계 외상으로 작용할 수 있으며, 이별의 슬픔이 해결되지 않고 지속될 경우 정신적 질환으로 이어질 수 있습니다. 굿데이는 청년들이 이러한 이별의 아픔을 극복하고, 다시 일상을 회복하며, 성장할 수 있도록 돕습니다.
            사용자는 일기장을 통해 이별 이후 매일의 감정과 생각을 돌아보고 정리하면서 발전적인 방향을 모색할 수 있습니다. 또한, 사용자에게 매일 다양한 미션을 제공함으로써 일상을 리프레쉬하고, 올바른 사회적 관계와 일상을 회복하도록 돕습니다`,
            teck: `굿데이는 이별로 인해 상처받은 청년들의 아픔을 공감하고, 이들의 일상 회복을 돕고자 하는 마음에서 시작되었습니다. 오랜 기간 사랑해왔던 연인과의 이별은 심각한 대인관계 외상으로 작용할 수 있으며, 이별의 슬픔이 해결되지 않고 지속될 경우 정신적 질환으로 이어질 수 있습니다. 굿데이는 청년들이 이러한 이별의 아픔을 극복하고, 다시 일상을 회복하며, 성장할 수 있도록 돕습니다.
            사용자는 일기장을 통해 이별 이후 매일의 감정과 생각을 돌아보고 정리하면서 발전적인 방향을 모색할 수 있습니다. 또한, 사용자에게 매일 다양한 미션을 제공함으로써 일상을 리프레쉬하고, 올바른 사회적 관계와 일상을 회복하도록 돕습니다`,
            image: "assets/2022_winter_dev/images/projects/clover.png",
        },
        {
            teamName: "오감자",
            teamPeople: "권순찬, 김송아, 이윤성, 황지우, 류현지",
            projectName: "에그밋(EggMeet)",
            hashTag: "#성장   # iOS   #플랫폼   #Springboot   #교감   #유대   #모바일   #Figma   #오감자",
            subTitle: "알을 깨고 성장하고 싶은 사람들의 만남을 중개하는 ios 어플리케이션",
            idea: `에그밋은, 한 가지 분야 (자기계발, 취미생활 등)에서 상대방에게 튜터링 또는 조언, 코칭을 해줄 수 있는 ‘멘토’와, 그에게 멘토링을 받고자 하는 ‘멘티’의 만남을 중개하는 모바일 지식 공유 서비스입니다.`,
            teck: `(iOS)
            iOS 어플리케이션의 사용자 인터페이스를 구현하고 이벤트를 관리하는 UIKit 프레임워크를 이용하였고, StoryBoar를 기반으로 개발하였습니다. 더불어 HTTP Networking을 위해 Alamofire라이브러리를 활용하였습니다.
            (Springboot)
            Spring boot 2와 Gradle을 기반으로 REST Api Server와 FCM Push Server를 구축하였습니다. 쿼리 작성을 위해 QueryDSL를 사용하였고, JWT Token을 다루기 위해 Spring security와 gson을 사용했습니다. 배포는 직접 구축한 라즈베리파이의 리눅스 서버를 이용했습니다.`,
            image: "assets/2022_winter_dev/images/projects/eggmeet.jpg",
        },
        {
            teamName: "김가네",
            teamPeople: "김현지, 김수민, 김정은",
            projectName: "카페가네",
            hashTag: "#카페추천   #시그니처음료   #개발자_디자이너   #html   #css   #VanillaJS   #NodeJS   #mySQL   #adobeillustration",
            subTitle: "음료를 기준으로 사용자에게 카페를 추천하는 웹사이트.",
            idea: `‘카페가네’는 카페를 고른 뒤 특정한 음료를 선택하는 것이 아닌 음료를 기준으로 나에게 맞는 카페를 소개해주는 웹입니다.
            커피를 마시는 사람들의 수준이 높아지면서 레드오션으로 변해버린 커피시장에서 스페셜티 커피' 가 등장했습니다. 이 점에 집중하려 ‘카페가네’는 카페를 고른 뒤 특정한 음료를 선택하는 것이 아닌 음료를 기준으로 나에게 맞는 카페를 소개해주는 웹입니다.
            이를 통해 같은 음료지만 카페마다 이름이 달라 원하는 음료를 찾기 힘들었던 사람들에게 도움을 주고 한 음료에 대한 정확한 니즈가 있는 사람에게는 짧은 시간의 검색을 통해 음료를 찾아낼 수 있을 것입니다.`,
            teck: `프론트엔드는 HTML과 CSS, Javascript를, 백엔드는 server에서 NodeJS ,데이터베이스로는mySQL을 사용하였습니다. 위치기반서비스를 구현하는 데에 있어 성능문제를 해결하고자 Spatial Indexing 방법을 사용해 DB에 저장하였습니다.
            디자인의 경우 일러스트는 adobe illustration을 이용하여 작업하였으며 웹사이트 디자인은 adobe xd를 이용하여 웹 1920을 기준으로 디자인하였습니다. 커피와 어울리는 컬러와 코지 하고 귀여운 콘셉트에 맞게 일러스트와 웹사이트를 디자인하였습니다.`,
            image: "assets/2022_winter_dev/images/projects/coffee.png",
        },
        {
            teamName: "팜 터틀",
            teamPeople: "설민우",
            projectName: "물에 드리운 그림자",
            hashTag: "#TRPG   #크툴루의 부름   #추리   #미스터리   #유니티   #PC게임   #심리적 공포",
            subTitle: "TRPG를 PC게임으로 즐길 수 있도록 게임을 제작했습니다.",
            idea: `기존에 여러 사람들과 오프라인으로 모여야하고 룰이 어렵다는 제한적인 특성 때문에  TPRG에 관심이 있어도 해보지 못하는 안타까운 상황이 자주 있었습니다. 최대한 그 느낌과 감성을 살리면서도 초보자들도 즐길 수 있도록 하여 PC게임으로 즐길 수 있도록 게임 개발을 진행했습니다.
            키워드를 이용한 추리와 한정된 능력치를 투자해 원하는 방향으로 스토리를 진행해 나가며 여러 가지 결말을 얻을 수 있습니다.`,
            teck: `PC를 지원하기 위해서 유니티 엔진을 통해 c#으로 개발되었습니다.
            그래픽 작업은 포토샵과 에이스프라이트를 이용했습니다.
            깃을 사용하여 버전관리를 진행했습니다.`,
            image: "assets/2022_winter_dev/images/projects/pam.png",
        },
        {
            teamName: "AIcoholic",
            teamPeople: "정아진, 경주원",
            projectName: "오늘의 칵테일",
            hashTag: "#칵테일   #감정   #추천   #NLP   #Transformer   #PyTorch   #KoBERT",
            subTitle: "감정 분류 인공지능을 활용한 칵테일 추천 프로그램",
            idea: `다양한 칵테일에 도전해 보고 싶지만, 칵테일과 서먹한 우리! 프로젝트 ‘오늘의 칵테일’의 인공지능 모델은 사용자가 일기를 작성하면 그 안의 텍스트를 분석해 감정을 인식합니다. 일기에서 인식된 감정 값을 토대로 칵테일에 입문하고 싶은 사용자에게 그날의 기분에 최적화된 다양한 맛의 칵테일을 추천하고 그 칵테일의 정보를 제공해 줍니다. 또한, 오늘의 칵테일은 전남대학교 학생들에게 근처 칵테일바에서만 볼 수 있는 시그니처 칵테일을 추천합니다. 오늘의 칵테일과 함께 즐거운 시간 보내세요!`,
            teck: `7가지 감정(기쁨, 슬픔, 놀람, 혐오, 분노, 슬픔, 중립)이 라벨링된 <한국어 감정 정보가 포함된 단발성 데이터셋>을 사용했습니다. 
            Transformer에서 파생된 BERT 모델은 2018년 구글이 발표한 자연어 처리(NLP)에 뛰어난 성능을 보여주는 딥러닝 모델입니다. BERT모델을 기반으로 한국어 성능을 개선한 koBERT모델을 이용해 감정 다중분류 모델을 만들었습니다.`,
            image: "assets/2022_winter_dev/images/projects/AIcoholic.png",
        },
        {
            teamName: "잘가라회장단.",
            teamPeople: "박재현, 김성혁, 김규란, 홍동건",
            projectName: "collusic-new",
            hashTag: "#음악   #협업   #Convention   #React   #CSR   #MVVM   #Recoil   #TypeScript   #Swagger   #Spring Boot   #Spring Web MVC   #Spring Data Jpa   #Pair Programming",
            subTitle: "온라인 작사 작곡 협업 웹 사이트",
            idea: "요즘 나오는 좋은 노래들, 혼자서 작곡하는 걸까요? 실제로 요즘 나오는 곡들 중 절반 이상이 공동 작곡 형태로 발매됩니다. 사실 대형 엔터테인먼트에서는 일찍부터 해외 유명 프로듀서들과 국내 탑 프로듀서들이 모여 협업을 하는 송캠프를 진행하고 있습니다. 하지만 이 송캠프는 많은 비용이 들뿐더러 공간적 제약이 존재하여 탑 프로듀서가 아닌 대부분의 프로듀서들은 지원조차 하지 못하는 상황입니다. 그래서 저희 collusic은 시대에 맞는 온라인 작사 작곡 협업 웹 애플리케이션 서비스를 제안합니다.",
            teck: `Collusic은 저번 학기 기획을 바탕으로 기술스택에 많은 변화를 주었습니다. Client는 토스에서 주목하고 있는 Recoil 상태관리 라이브러리와 MVVM 디자인 패턴을 적용하였고, OOP를 위해 TypeScript 언어로 프로젝트를 진행하였습니다. Server는 Spring Boot, Spring Web MVC, Spring Data Jpa를 이용하여 핵심 도메인을 설계하고 페어프로그래밍을 통해 개발 방향성에 대해 함께 고민하며 페어가 가지고 있는 좋은 습관들을 배울 수 있었습니다.
            세 학기에 걸쳐 진행하는 프로젝트인 만큼 처음부터 지금까지의 변천사와 기술적인 내용을 중점으로 발표를 진행할 계획입니다.`,
            image: "assets/2022_winter_dev/images/projects/collusic.png",
        },
    ],
};
