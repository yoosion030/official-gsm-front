import * as S from 'client/components/Policy/PrivacyPolicy/style';

import Table1400 from './Table1400';
import Table900 from './Table900';
import * as T from './style';

interface Props {
  width: number;
}

const Policy2 = ({ width }: Props) => (
  <S.PolicyContentBox>
    <S.PolicyTitle>제 2조 (개인정보의 처리 및 보유기간)</S.PolicyTitle>
    <S.SubTitle>
      <span>1.&nbsp;</span> 광주소프트웨어마이스터고등학교에서 처리하는
      개인정보는 수집 이용 목적으로 명시한 범위 내에서 처리하며, 개인정보보호법
      및 관련 법령에서 정하는 보유기간을 준용하여 이행하고 있습니다.
    </S.SubTitle>
    <S.SubTitle>
      <span>2.&nbsp;</span> 개인정보파일은 연1회 조사하여 대장 정비하며, 이후
      등록 대상 발생 건은 별도 처리합니다.
    </S.SubTitle>
    <S.SubTitle>
      <span>3.&nbsp;</span> 광주소프트웨어마이스터고등학교는 각 부서에서
      운영하는 소관업무 및 홈페이지를 통해서 수집 보유하고 있는 주요
      개인정보파일을 다음과 같이 안내하고 있습니다.
    </S.SubTitle>
    <S.SubTitle>
      [ 세부 내용은 개인정보보호 포털(https://www.privacy.go.kr) ▶ 개인서비스 ▶
      정보주체 권리행사 ▶ 개인정보의 열람등 요구 ▶ 개인정보파일 (목록) 검색 ▶
      기관명에 “광주소프트웨어마이스터고등학교” 입력 후 검색
      <br />
      광주소프트웨어마이스터고등학교 [개인정보파일 목록] 보기(클릭) ]
    </S.SubTitle>
    <S.TableWrap>
      {width > 1400 && (
        <T.TableTitle>
          <T.TableTitleContent>개인정보 파일명</T.TableTitleContent>
          <T.TableTitleContent>보유목적</T.TableTitleContent>
          <T.TableTitleContent>보유근거</T.TableTitleContent>
          <T.TableTitleContent>항목</T.TableTitleContent>
          <T.TableTitleContent>보유기간</T.TableTitleContent>
          <T.TableTitleContent>
            열람요구
            <br />
            접수처리부서
          </T.TableTitleContent>
          <T.TableContent>
            <T.TableRowContent>학교생활 기록부</T.TableRowContent>
            <T.TableRowContent>
              학생의 학업성취도 평가를 통한 내실화 도모
            </T.TableRowContent>
            <T.TableRowContent>
              -「초ㆍ중등교육법」제25조
              <br /> -「초ㆍ중등교육법 시행규칙」제21조
            </T.TableRowContent>
            <T.TableRowContent>
              -학생: 성명,주민번호,주소
              <br /> -보호자: 성명, 생년월일
            </T.TableRowContent>
            <T.TableRowContent>준영구</T.TableRowContent>
            <T.TableRowContent>각 학년부, 행정실</T.TableRowContent>
            <T.TableRowContent>학생건강 기록부</T.TableRowContent>
            <T.TableRowContent>학생건강기록 관리</T.TableRowContent>
            <T.TableRowContent>
              -「학교건강검사 규칙」제9조
              <br /> -「학생건강기록부 전산처리 및 관리지침」제14조
            </T.TableRowContent>
            <T.TableRowContent>
              이름, 주민번호, 학년, 반, 번호, 성별,
              <br /> 혈액형, 키, 몸무게, 비만도
            </T.TableRowContent>
            <T.TableRowContent>졸업후 5년</T.TableRowContent>
            <T.TableRowContent>보건실</T.TableRowContent>
            <T.TableRowContent>
              학부모서비스
              <br /> 이용자명단
            </T.TableRowContent>
            <T.TableRowContent>학부모의 학생정보 열람</T.TableRowContent>
            <T.TableRowContent>「교육기본법」제23조의3</T.TableRowContent>
            <T.TableRowContent>
              -학부모: 성명, 주민번호
              <br />
              -학생: 성명, 주민번호
            </T.TableRowContent>
            <T.TableRowContent>회원탈퇴시까지</T.TableRowContent>
            <T.TableRowContent>각 학년부</T.TableRowContent>
            <T.TableRowContent>
              홈페이지
              <br />
              회원정보
            </T.TableRowContent>
            <T.TableRowContent>홈페이지회원관리</T.TableRowContent>
            <T.TableRowContent>정보주체 동의</T.TableRowContent>
            <T.TableRowContent>이름,학년,반,번호</T.TableRowContent>
            <T.TableRowContent>
              졸업/회원탈퇴시
              <br />
              까지
            </T.TableRowContent>
            <T.TableRowContent>인문교육 정보부</T.TableRowContent>
            <T.TableRowContent>민원사무 처리부</T.TableRowContent>
            <T.TableRowContent>민원접수 및 처리 관리</T.TableRowContent>
            <T.TableRowContent>
              -「민원 처리에 관한 법률 시행령」제6조
              <br />
              -「민원 처리에 관한 법률 시행규칙」제3조
            </T.TableRowContent>
            <T.TableRowContent>이름,집주소,E-mail,연락처</T.TableRowContent>
            <T.TableRowContent>10년</T.TableRowContent>
            <T.TableRowContent>행정실</T.TableRowContent>
            <T.TableRowContent>학교운영위원회명부</T.TableRowContent>
            <T.TableRowContent>
              학교운영위원회 구성 및 운영관리
            </T.TableRowContent>
            <T.TableRowContent>
              -「초ㆍ중등교육법」제34조
              <br />
              -「초ㆍ중등교육법 시행규칙」제62조
            </T.TableRowContent>
            <T.TableRowContent>
              성명,주소,생년월일, 직업,연락처
            </T.TableRowContent>
            <T.TableRowContent>10년</T.TableRowContent>
            <T.TableRowContent>행정실</T.TableRowContent>
            <T.TableRowContent>
              스쿨뱅킹(CMS)
              <br />
              정보
            </T.TableRowContent>
            <T.TableRowContent>수납금 처리</T.TableRowContent>
            <T.TableRowContent>정보주체 동의</T.TableRowContent>
            <T.TableRowContent>
              -학생: 이름,생년월일,학년,반,번호
              <br />
              -보호자: 이름,연락처,생년월일,계좌정보
            </T.TableRowContent>
            <T.TableRowContent>5년</T.TableRowContent>
            <T.TableRowContent>행정실</T.TableRowContent>
            <T.TableRowContent>발전기금 기탁자명부</T.TableRowContent>
            <T.TableRowContent>
              학교발전기금 기탁자 및 내역 관리
            </T.TableRowContent>
            <T.TableRowContent>
              「초ㆍ중등교육법 시행규칙」제52조
            </T.TableRowContent>
            <T.TableRowContent>성명, 생년월일, 주소, 연락처</T.TableRowContent>
            <T.TableRowContent>5년</T.TableRowContent>
            <T.TableRowContent>행정실</T.TableRowContent>
          </T.TableContent>
        </T.TableTitle>
      )}
      {width < 1400 && width > 900 && <Table1400 />}
      {width < 900 && <Table900 />}
    </S.TableWrap>
  </S.PolicyContentBox>
);

export default Policy2;
