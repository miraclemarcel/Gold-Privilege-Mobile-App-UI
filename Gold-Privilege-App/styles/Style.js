import styled from 'styled-components/native';
import { View, Text, Image, TextInput, TouchableOpacity, Dimensions, Pressable } from 'react-native';


// expo constants 
import Constants from 'expo-constants';
import Checkout from '../screens/CheckoutScreens/Checkout';

// styled text input function============

  

// ==== Dimensions =============
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


//  -------- colors--------

export const Colors = {
    primary: "#e5ad04", 
    prrofileBg: "#E6A540", 
    primaryVariant: "rgba(229, 173, 1, 0.3)",
    primaryHover: "#144FE1",
    backgroundColor: "#ffffff",
    homeHeaderBg: "#102249",
    darkBlue: "#071e56",
    cardsBg: "#17203D",
    cardsBorder: "#2E3852",
    whiteColor: "#ffffff",
    onBordingText: "#ffffff",
    black: "#000000",
    inputBg: "#FFF7EB",
    inputBorderFocus: "#1350E8",
    inputPlaceholder: "#8B9CC8",
    success: "#3CDF21",
    danger: "#FF0000",
    inputBorder: "#B9B6B6",
    darkColor: "#3f3d56",
    labelColor: "#6f6e80",
    physicalCardColor: "#fbb554", 
    virtualCardColor: "#716028", 
    virtualCardBtnColor: "#8E6B02", 
}

const {primary, prrofileBg, physicalCardColor, virtualCardColor, virtualCardBtnColor, primaryVariant, primaryHover, backgroundColor, homeHeaderBg, 
    cardsBg, cardsBorder, white, black, inputBg, 
    inputBorderFocus, inputPlaceholder, success, labelColor, danger, darkBlue, darkColor, inputBorder,  onBordingText, whiteColor} = Colors;
    

// =====GENERAL STYLES===========

export const StyledContainer = styled.View`
    flex: 1;
    padding: 20px;
    backgroundColor: ${whiteColor};
`;
export const AuthContainer = styled.View`
    flex: 1;
    backgroundColor: ${whiteColor};
`;
export const AuthPageTitleText = styled.Text`
    fontSize: 20px;
    color: ${primary};
    fontWeight: 600;
    textAlign: center;
`;
export const AuthInnerContainer = styled.View`
    flex: 1;
    padding: 20px;
`;
export const AuthHeaderContainer = styled.View`
`;
export const AuthHeadingTextContainer = styled.View`
    position: absolute;
    flexDirection: row;
    gap: 5px;
    bottom: 20px;
    padding: 20px;
    left: 0;
`;
export const MainScreenContainer = styled.View`
    backgroundColor: ${whiteColor};
`;
export const AuthTitle = styled.Text`
    fontSize: 25px;
    color: ${darkColor};
    fontFamily: PoppinsSemiBold;
`;
export const AuthSubTitle = styled.Text`
    fontSize: 18px;
    color: ${primary};
`;
export const AuthHeadingTextLeft = styled.Text`
    fontSize: 24px;
    color: ${whiteColor};
    fontFamily: PoppinsSemiBold;
`;
export const AuthHeadingTextRight = styled.Text`
    fontSize: 24px;
    color: ${primary};
    fontFamily: PoppinsSemiBold;
`;

export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
    alignItems: center;
`;


export const PageTitleHeader = styled.View`
    height: 60px;
    background: ${whiteColor};
    pading: 5px;
    alignItems: center;
    justifyContent: center;
    textAlign: center;
    width: 100%;
`;
export const PageTitle = styled.Text`
    fontSize: 20px;
    textAlign: center;
    fontFamily: PoppinsSemiBold;
    color: ${darkColor};
    justifyContent: center;
    padding: 16px;
`;
export const StyledFormArea = styled.View`
    width: 100%;
    paddingTop: 20px;
`;
export const StyledTextInput = styled.TextInput`
  padding: 10px;
  paddingLeft: 25px;
  paddingRight: 15px;
  borderRadius: 8px;
  border: 1px;
  borderColor: ${inputBorder};
  fontSize: 16px;
  fontFamily: PoppinsRegular;
  height: 50px;
  marginVertical: 3px;
  marginBottom: 10px;
  color: ${inputPlaceholder};
`;

export const InputLabelText = styled.Text`
    fontSize: 16px;
    color: ${labelColor};
    fontFamily: PoppinsRegular;
`;
export const ButtonText = styled.Text`
    color: ${whiteColor};
    font-size: 16px;
    textAlign: center;
`;
export const SearchContainer = styled.View`
    width: 100%;
    paddingTop: 20px;
`;
export const SearchContainerShop = styled.View`
    width: 100%;
    paddingTop: 20px;
    marginBottom: 20px;
`;
export const SearchBar = styled.TextInput`
    padding: 10px;
    paddingLeft: 25px;
    paddingRight: 15px;
    borderRadius: 12px;
    border: 1px;
    borderColor: ${inputBorder};
    fontSize: 16px;
    height: 40px;
    marginVertical: 3px;
    marginBottom: 10px;
    color: ${inputPlaceholder};
`;
export const StyledButton = styled.TouchableOpacity`
    padding: 15px;
    background: ${primary};
    justify-content: center;
    border-radius: 8px;
    width: 100%;
    marginTop: 30px;
    height: 60px;
`;
export const ToSignupPageBox = styled.View`
    flex-direction: row;
    padding: 10px;
`;
export const ToSignupPageBoxSignUp = styled.View`
    justifyContent: center;
    alignItems: center;
    flex-direction: row;
    padding: 10px;
`;
export const ToSignupPageText = styled.Text`
    justify-content: center;
    alignItems: center;
    color: ${labelColor};
    fontSize: 15px;
`;
export const TextLink = styled.TouchableOpacity`
    justify-content: center;
    alignItems: center;
`;
export const TextLinkContent = styled.Text`
    fontSize: 15px;
    color: ${primary};
    fontWeight: 600;
`;
export const ResetPassword = styled.TouchableOpacity`
    alignItems: center;
`;
export const ResetPasswordText = styled.Text`
    fontSize: 15px;
    color: ${primary};
    fontWeight: 600;
`;
export const CalendarRightIcon = styled.TouchableOpacity`
    position: absolute;
    top: 20px;
    right: 15px;
    z-index: 1;
`;
export const RightIcon = styled.TouchableOpacity`
    position: absolute;
    top: 20px;
    right: 15px;
    z-index: 1;
`;
export const StyledTextInputLabel = styled.Text`
    fontSize: 14px;
    color:  ${inputPlaceholder};
    marginBottom: 10px;
    marginTop: 15px;
`;


// ========END OF GENERAL STYLES=============

// =========Onboarding section============

export const OnboardingContainer = styled.View`
`;
export const OnboardContent = styled.View`
    position: absolute;
    bottom: 50px;
    padding: 20px;
    width: 100%;
`;
export const OnboardTextContent = styled.View`
    position: absolute;
    bottom: 200px;
    padding: 20px;
    width: 100%;
`;
export const OnboardingTextContainer = styled.View`
   
 
`;
export const OnboardingTextTitle = styled.Text`
    fontSize: 30px;
    lineHeight: 45px;
    fontFamily: MonserratBold;
    color: ${onBordingText};
`;
export const OnboardingTextDesc = styled.Text`
    fontSize: 15px;
    color: ${onBordingText};
    marginTop: 17px;
    fontFamily: PoppinsMedium;
`;

export const OnboardingButtonContainer = styled.View`
    gap: 10px;
    paddingTop: 20px;
   
`;
export const FullAuthBtn = styled.View`
    background: ${primary};
    padding: 8px;
    width: 100%;
    height: 50px;
    borderRadius: 8px;
    justifyContent: center;

`;
export const BorderAuthBtn = styled.View`
    border: 2px;
    borderColor: ${primary};
    padding: 8px;
    width: 100%;
    height: 50px;
    borderRadius: 8px;
    justifyContent: center;

`;
export const AuthButtonText = styled.Text`
    color: ${onBordingText};
    textAlign: center;
`;
export const Indicator = styled.View`
    flexDirection: row;
    justifyContent: center;
    marginTop: 20px;
`;

export const IndicatorDots = styled.View`
    height: 10px;
    width: 10px;
    backgroundColor: ${onBordingText};
    marginHorizontal: 3px;
    borderRadius: 50px;
`;

// =========Login & SignUp section===========

export const AuthImageContainer = styled.View`
    width: 100%;
`;
export const AuthImage = styled.Image`
    width: 100%;
    height: 180px;
`;
export const FormSelection = styled.View`
    flexDirection: row;
    gap: 10px;
    marginTop: 15px;
`;
export const FormTab = styled.View`
`;
export const FormTabText = styled.Text`
    fontSize: 19px;
    color: ${cardsBg};
`;
export const CtaTextContainer = styled.TouchableOpacity`
    
`;
export const CtaText = styled.Text`
    fontSize: 17px;
    color: ${labelColor};
`;
export const FirstAndLast = styled.View`
    flexDirection: row;
    justifyContent: space-between;
`;
export const NameInputContainer = styled.View`
    flexDirection: column;
    width: 49%;
`;
export const FirstAndLastInput = styled.TextInput`
    padding: 15px;
    paddingLeft: 25px;
    paddingRight: 15px;
    borderRadius: 8px;
    border: 1px;
    borderColor: ${inputBorder};
    fontSize: 16px;
    height: 50px;
    marginVertical: 3px;
    marginBottom: 10px;
    color: ${inputPlaceholder};
`;

// ===SignUp Otp ===========
export const  SignUpVerification = styled.View`
    flexDirection: column;
    gap: 20px;
    alignItems: center;
`;
export const SignUpOtpText = styled.Text`
    fontSize: 15px;
    marginTop: 20px;
`;
export const SignUPOtpImageConatainer = styled.View`
    alignItems: center;
`;
export const SignUPOtpImage = styled.Image`
    width: 250px;
    height: 250px;
`;
export const OtpButtonBottom = styled.View`
    flexDirection: column;
    gap: 10px;
    alignItems: center;
    width: 100%;
`;
export const ResendBox = styled.View`
    marginTop: 15px;
    alignItems: center;
`;
export const OtpVerficationCountdown = styled.Text`
    fontSize: 13px;
    color: ${labelColor};
`;
export const ResendOtpTextBtn = styled.TouchableOpacity`

`;
export const ResendOtpText = styled.Text`
    fontSize: 15px;
    color: ${primary};
`;

// ======congrats pop up=============

export const CongratsContainer = styled.View`
    flex: 1;
    alignItems: center;
    justifyContent: center;
    backgroundColor: ${whiteColor};
`;
export const CongratsTop = styled.View`
    flexDirection: column;
    gap: 10px;
`;
export const CongratsImageContainer = styled.View`
    alignItems: center;
`;
export const CongratsImage = styled.Image`
    width: 300px;
    height: 270px;
`;
export const CongratsText = styled.Text`
    fontSize: 30px;
    color: ${primary};
    fontWeight: 600;
    textAlign: center;
`;
export const CongratsTextBody = styled.Text`
    fontSize: 17px;
    textAlign: center;
`;
export const GoldText = styled.Text`
    fontWeight: 600;
`;
export const CongratsBtn = styled.TouchableOpacity`
`;
export const CongratsBtnText = styled.Text`
    fontSize: 15px;
    color: ${primary};
`;
export const CongratsBottom = styled.View`
    flexDirection: column;
    gap: 40px;
    marginTop: 30px;
    alignItems: center;
`;


// ====================HOME SCREEN==========================
export const HomeHeaderContainer = styled.View`
    flexDirection: row;
    justifyContent: space-between;
    width: 100%;
`;
export const HomeHeaderLeftContainer = styled.View`
    flexDirection: row;
    gap: 10px;
`;
export const Avatar = styled.Image`
    height: 50px;
    width: 50px;
    borderRadius: 50px;
`;
export const NameContainer = styled.View`
    flexDirection: column;
    gap: 10px;
`;
export const UsernameText = styled.Text`
    fontSize: 13px;
`;
export const UserIDtext = styled.Text`
    fontSize: 13px;
    color: ${primary};
`;

export const HomeHeaderRightContainer = styled.View`
    flexDirection: column;
    gap: 10px;
`;
export const HeaderIcon = styled.View`
    flexDirection: row;
    justifyContent: flex-end;
    gap: 10px;
`;
export const HeaderLeftTextContainer = styled.View`
    flexDirection: row;
    gap: 5px;
    alignItems: center;
`;
export const PlanText = styled.Text`
    fontSize: 13px;
    fontWeight: 600;
`;
export const HomeBannerSlide = styled.View`
    paddingTop: 20px;
`;
export const BannerImages = styled.Image`
    height: 200
`;
export const InnerHomeContainer = styled.View`
    flexDirection: column; 
    width: 100%;
`;
export const YourPiviligesContainer = styled.View`
    flexDirection: column;
    marginTop: 20px;
`;
export const PrivilegeTextContainer = styled.View`
    flexDirection: row;
    justifyContent: space-between;
`;
export const PrivilegeTextLeft = styled.Text`
    fontSize: 20px;
`;
export const PrivilegeTextRightBtn = styled.TouchableOpacity`
`;
export const PrivilegeTextRight = styled.Text`
    fontSize: 15px;
    textDecoration: underline;
`;

// ===privilege plan===========
export const PrivilegesPlanContainer = styled.View`
    paddingTop: 20px;
    flexDirection: row;
    justifyContent: space-between;


`;
export const PlanContainer = styled.View`
    flexDirection: column;
    gap: 10px;
    alignItems: center;
    justifyContent: space-between;
    width: 49%;
`;
export const PrivilegePlanImg = styled.Image`
    width: 150px;
    height: 130px;
    borderRadius: 20px;
`;
export const PrivilegePlanTitle = styled.Text`
    fontSize: 13px;
    fontWeight: bold;
`;
export const PrivilegeAccessTextContainer = styled.View`
    flexDirection: row;
    gap: 10px;
`;
export const PrivilegeAccessText = styled.Text`
    fontSize: 11px;
    color: ${inputPlaceholder};
`;
export const PrivilegeAccessNumber = styled.Text`
    fontSize: 11px;
    fontWeight: bold;
`;
export const PrivilegePlanBtn = styled.View`
    background: ${black};
    padding: 5px;
    height: 30px;
    width: 100px;
    justifyContent: center;
    alignItems: center;
    borderRadius: 6px;
`;
export const PrivilegePlanBtnText = styled.Text`
    color: ${whiteColor};
    textAlign: center;
`;

// ====HOT DEALS ============
export const HotdealsContainer = styled.View`
    paddingTop: 20px;
    flexDirection: column;
    gap: 15px;
`;
export const HotdealsTextContainer = styled.View`
    width: 100%;
    flexDirection: row;
    justifyContent: space-between
`;
export const HotdealsTextLeftContainer = styled.View`
    flexDirection: row;
    gap: 5px;
`;
export const HotdealsTextLeft = styled.Text`
    fontSize: 25px;
    fontWeight: 700;
`;
export const HotdealsTextLeftTwo = styled.Text`
    fontSize: 25px;
    color: ${primary};
    fontWeight: 700;
`;
export const HotdealsTextRightBtn = styled.TouchableOpacity`
`;
export const HotdealsTextRight = styled.Text`
    fontSize: 15px;
    textDecoration: underline;
`;
// =====plan ======
export const HotDealPlanContainer = styled.View`
    borderRadius: 20px;
    overflow: hidden;
`;
export const HotDealPlanInfo = styled.View`
    flexDirection: row;
    width: 100%;
    justifyContent: space-between;
    backgroundColor: rgba(255, 255, 255, 0.5); 
    backdropFilter: blur(20px); 
    height: 80px;
    paddingLeft: 10px;
    paddingRight: 10px;
    paddingTop: 5px;
    paddingBottom: 5px;
`;
export const HotDealPlanInfoLeft = styled.View`
    fontSize: 24px;
    color: ${whiteColor};
    fontWeight: 700;
`;
export const HotDealPlanInfoRightText = styled.Text`
    fontSize: 20px;
    fontWeight: 700;
    color: ${whiteColor};
`;
export const HotDealPlanTitle = styled.Text`
    fontSize: 20px;
    color: ${whiteColor};
`;
export const HotDealPlanStar = styled.View`
    flexDirection: row;
    gap: 5px;
`;
// export const HotDealPlanLeftText = styled.Text`
//     fontSize: 24px;
//     color: ${whiteColor};
//     fontWeight: 700;
// `;

// =========SHOP SCREEN==============
export const ShopHeading = styled.View`
    width: 100%;
    flexDirection: row;
    justifyContent: flex-end;
`;
export const FilterContainer = styled.View`
`;

export const ProductContainer = styled.View`
    alignItems: center;
    width: 48%; 
    marginRight: 10px;
`;
export const ProductContainerInner = styled.View`
    width: 100%;
`;
export const FlatlistContainer = styled.View`
    width: 100%;
    paddingBottom: 100px;
`;
export const ProductImageContainer = styled.View`
    
`;
export const ImageOfProduct = styled.Image`
    width: 100%;
    height: 150px;
    borderRadius: 20px;
    borderWidth: 2px;
    borderColor: ${primary};
`;
export const ProductContent = styled.View`
    flexDirection: column;
    gap: 8px;
    alignItems: center;
    marginTop: 10px;
`;
export const ProductTitleText = styled.Text`
    fontSize: 12px;
    fontWeight: 700;
    color: ${black};
`;
export const PriceContainer = styled.View`
    flexDirection: row;
    gap: 5px;
`;
export const ActualPriceText = styled.Text`
    fontSize: 11px;
    color: ${labelColor};
    text-decoration-line: line-through;

`;
export const DiscountPriceText = styled.Text`
    fontSize: 11px;
    color: ${black};
`;
export const FiveStarContainer = styled.View`
    flexDirection: row;
    gap: 3px;
`;
export const DetailsBtn = styled.View`
    background: ${black};
    padding: 5px;
    width: 100%;
    textAlign: center;
    borderRadius: 5px;
    marginTop: 12px;
`;
export const DetailsBtnText = styled.Text`
    fontSize: 10px;
    color: ${whiteColor};
    textAlign: center;
`;
export const DescriptionContainer = styled.View`
    background: ${primary};
    position: absolute;
    width: 100%;
    height: 100%;
    borderRadius: 20px;
    padding: 10px;
    textAlign: center;
    justifyContent: center;
`;
export const DescriptionText = styled.Text`
    color: ${whiteColor};
    fontSize: 13px;
    textAlign: center;
`;

// ==============WALLET SCREEN ==============

export const WalletContainer = styled.View`
    flexDirection: column;
    gap: 20px;
    width: 100%;
`;
export const WalletBox = styled.View`
    background: ${primary};
    marginTop: 20px;
    flexDirection: column;
    justifyContent: space-between;
    height: 140px;
    borderRadius: 10px;
    padding: 20px;
`;
export const WalletTitle = styled.Text`
    fontSize: 11px;
    color: ${whiteColor};
    fontFamily: PoppinsMedium;
`;
export const WalletPrice = styled.Text`
    fontSize: 38px;
    color: ${whiteColor};
    fontFamily: PoppinsSemiBold;
`;
export const WalletPriceContainer = styled.View`
    flexDirection: row;
    justifyContent: space-between;
    alignItems: center;
`;
export const IconContainer = styled.View`
    
`;
export const WalletBtnContainer = styled.View`
    flexDirection: row;
    justifyContent: space-between;
`;
export const AddCardBtn = styled.TouchableOpacity`
    padding: 6px;
    background: ${primary};
    height: 50px;
    alignItems: center;
    justifyContent: center;
    borderRadius: 10px;
    width: 49%;
    flexDirection: row;
    gap: 6px;
`;
export const AddFundBtn = styled.TouchableOpacity`
    padding: 6px;
    border: 1px;
    borderColor: ${primary};
    height: 50px;
    alignItems: center;
    justifyContent: center;
    width: 49%;
    borderRadius: 10px;
    flexDirection: row;
    gap: 6px;
`;
export const AddCardBtnText = styled.Text`
    color: ${whiteColor};
`;
export const AddMoneyBtnText = styled.Text`
    color: ${primary};
`;


// ====Wllet activity section ===================

export const WalletActivityContainer = styled.View`
    paddingTop: 20px;
`;

export const ActivityHeader = styled.View`
    flexDirection: row;
    width: 100%;
    justifyContent: space-between;
`;
export const ActivityHeadTitle = styled.Text`
    fontSize: 14px;
    fontFamily: PoppinsSemiBold;
`;
export const ActivityHeadTitleRight = styled.Text`
    fontSize: 14px;
    fontFamily: PoppinsSemiBold;
    textDecorationLine: underline;
`;
export const WalletNoticeContainer = styled.View`
    marginTop: 50px;
    alignItems: center;
`;
export const WalletNotice = styled.Text`
    fontSize: 12px;
    fontFamily: PoppinsMedium;
    color: ${labelColor};
`;

// =============Profile screen =================
export const ProfileContainer = styled.View`
    flex: 1;
    padding: 20px;
    backgroundColor: ${prrofileBg};
`;
export const ProfileInnerContainer = styled.View`
    flex: 1;
    width: 100%;
    alignItems: center;
`;
export const ProfileTitleHeader = styled.View`
    height: 60px;
    background: ${primary};
    padding: 5px;
    alignItems: center;
    justifyContent: center;
    textAlign: center;
    width: 100%;
`;
export const ProfileTitleContainer = styled.View`
    height: 60px;
    background: ${primary};
    padding: 20px;
    width: 100%;
`;
export const ProfileHeaderSection = styled.View`
    flexDirection: column;
    gap: 10px;
    alignItems: center;
`;

export const UserAvatarContainer = styled.View`

`;
export const UserAvatar = styled.Image`
    height: 100px;
    width: 100px;
    borderRadius: 50px;
`;
export const UserAvatarIcon = styled.TouchableOpacity`
    height: 30px;
    width: 30px;
    borderRadius: 50px;
    display: absolute;
    right: -70px;
    top: -25px;
    background: ${primary};
    alignItems: center;
    justifyContent: center;
`;
export const UserName = styled.Text`
    fontSize: 15px;
    color: ${black};
    fontFamily: PoppinsMedium;
`;
export const UserID = styled.Text`
    fontSize: 15px;
    color: ${whiteColor};
`;
export const UserPointBtn = styled.View`
    background: ${whiteColor};
    padding: 5px;
    flexDirection: row;
    gap: 5px;
    width: 150px;
    alignItems: center;
    justifyContent: center;
    borderRadius: 30px;
`;
export const UserPointText = styled.Text`
    fontSize: 15px;
`;
export const ProfileOption = styled.View`
    marginTop: 20px;
`;
export const ProfileOptionContainer = styled.TouchableOpacity`
    flexDirection: row;
    justifyContent: space-between;
    height: 60px;
    alignItems: center;
    width: 100%;
`;
export const ProfileOptionLeft = styled.View`
    flexDirection: row;
    gap: 10px;
`;
export const ProfileOptionLeftText = styled.Text`
    fontSize: 16px;
    fontWeight: 700;
    color: ${whiteColor};
`;

export const ProfileOptionRightIcon = styled.View`
`;
export const SignOutBtn = styled.TouchableOpacity`
    flexDirection: row;
    gap: 10px;
    background: ${whiteColor};
    padding: 10px;
    width: 100%;
    marginTop: 50px;
    justifyContent: center;
    alignItems: center;
    borderRadius: 8px;
`;
export const SignOutBtnText = styled.Text`
    color: ${black};
    fontSize: 15px;
    alignItems: center;
`;
export const UpgrePlanContainer = styled.View`
    width: 100%;
    borderRadius: 15px;
    overflow: hidden;
    marginTop: 40px;
`;
export const UpgradeTextContainer = styled.View`
    flexDirection: column;
    gap: 5px;
    alignItems: center;
    marginBottom: 10px;
`;
export const UpgradeTextContainerTwo = styled.View`
    flexDirection: row;
    gap: 5px;
`;

export const UpgradeText = styled.Text`
    fontSize: 15px;
    fontWeight: 600;
    color: ${black};
    
`;
export const UpgradeTextYellow = styled.Text`
    fontSize: 15px;
    color: ${primary};
    fontWeight: 600;
`;
export const UpgradeBtn = styled.View`
    background: ${primary}; 
    padding: 5px;
    width: 120px;
    alignItems: center;
    borderRadius: 6px;
`;
export const UpgradeBtnText = styled.Text`
    color: ${whiteColor};
    fontSize: 15px;
`;
// =============AVATA UPLOAD PAGE ============
export const AvatarUploadContainer = styled.View`
    flex: 1;
    backgroundColor: ${whiteColor};
`;
export const AvatarUploadDisplay = styled.ImageBackground`
    height: 430px;
    width: 100%;
    alignItems: center;
    justifyContent: flex-end;
`;

export const AvatarNameContainer = styled.Text`
    paddingBottom: 30px;
`;
export const AvatarName = styled.Text`
    fontSize: 14px;
    fontFamily: PoppinsMedium;
`;
export const AvatarBottomContainer = styled.View`
    flexDirection: column;
    padding: 20px;
    gap: 70px;
    marginBottom: 40px;
`;

export const AvatartListContainer = styled.View`
    flexDirection: row;
    flexWrap: wrap;
    justifyContent: center;
    display: absolute;
    top: -40px;
`;

export const ChooseAvatarBox = styled.TouchableOpacity`
    marginBottom: 30px;
    width: 60px;
    height: 60px;
    marginRight: 10px;
`;

export const ChooseAvatarImageContainer = styled.View`
    width: 64px;
    height: 64px;
    border: 4px solid ${whiteColor}; 
    borderRadius: 8px; 
    overflow: hidden; 
`;

export const ChooseAvatarImage = styled.Image`
    width: 100%;
    height: 100%;
`;

export const ChooseAvatarName = styled.Text`
    fontSize: 8px;
`;
export const AvartarBtnContainer = styled.View`
    flexDirection: row;
    justifyContent: space-between;
`;
export const UploadBtnBtn = styled.TouchableOpacity`
    width: 69%;
    height: 50px;
    background: ${primary};
    alignItems: center;
    justifyContent: center;
    borderRadius: 10px;
    gap: 6px;
`;
export const ShareBtn = styled.TouchableOpacity`
    width: 30%;
    height: 50px;
    width: 30%;
    height: 50px;
    border: 1px;
    borderColor: ${primary};
    alignItems: center;
    justifyContent: center;
    borderRadius: 10px;
    gap: 6px;
`;
// ========PROFILE DETAILS PAGE ===========
export const StyledProfileInput = styled.TextInput`
  padding: 15px;
  backgroundColor: ${inputBg};
  paddingLeft: 25px;
  paddingRight: 15px;
  borderRadius: 8px;
  fontSize: 16px;
  height: 50px;
  marginVertical: 3px;
  marginBottom: 10px;
  color: ${inputPlaceholder};
`;
export const ProfileInputLabelText = styled.Text`
    fontSize: 18px;
    color: ${black};
    marginTop: 10px;
`;
export const ProfileInputLabelSmall = styled.Text`
    fontSize: 14px;
    color: ${black};
`;
export const ProfileButtonContainer = styled.View`
    marginTop: 50px;
`;

// =====Upgrade plan screen =============
export const AllUserPlans = styled.View`
    flexDirection: column;
    width: 100%;
    gap: 23px;
`;
export const UserPlanContainer = styled.View`
    flexDirection: column;
    gap: 10px;
    alignItems: center;
    elevation: 5;
    width: 100%;
    padding: 15px;
    borderRadius: 20px;
`;
export const UserPlanTitle = styled.Text`
    fontSize: 20px;
    fontWeight: 600;
`;
export const PlanLine = styled.View`
   height: 4px;
   width: 80px;
   background: ${black};
`;
export const PlanPriceContainer = styled.View`
   flexDirection: row;
   gap: 10px;
`;
export const PlanPrice = styled.Text`
    fontWeight: 700;
    fontSize: 18px;
    color: ${black};
`;
export const PlanDuration = styled.Text`
    fontSize: 15px;
    color: ${black};
`;
export const PlanFooter = styled.View`
    flexDirection: row;
    justifyContent: space-between;
    width: 100%;
    
`;
export const PlanFooterText = styled.Text`
    fontSize: 12px;
    color: ${black};
`;
export const ChoosePlanText = styled.Text`
    fontSize: 20px;
    color: ${primary};
    fontWeight: 700;
`;


// =========Checkout==============
export const UpgradeCheckoutTitle = styled.Text`
    fontSize: 13px;
    color: ${black};
    fontWeight: 500;
`;
export const CheckoutContent = styled.View`
    flexDirection: column;
    alignItems: center;
    marginTop: 50px;
`;
export const UpgradePlanType = styled.Text`
    fontSize: 20px;
    color: ${black};
    fontWeight: 600;
`;
export const UpgradePlanContainer = styled.View`
    flexDirection: row;
    gap: 10px;
`;
export const UpgradePlanPrice = styled.Text`
    fontSize: 20px;
    color: ${black};
    fontWeight: 700;
`;
export const UpgradePlanDuration = styled.Text`
    fontSize: 20px;
    color: ${labelColor};
`;
export const CheckOutPlanContainer = styled.View`
    flexDirection: column;
    gap: 10px;
`;

// ==============================MY PLAN PAGE ================
export const MyPlanContainer = styled.View`
    flex: 1;
    width: 100%;
`;
export const PlanHeaderContainer = styled.View`
    flexDirection: column;
    gap: 10px;
`;
export const ActivePlanBtn = styled.View`
    padding: 10px;
    background: ${primaryVariant};
    width: 100px;
    justifyContent: center;
    alignItems: center;
    borderRadius: 6px;
`;
export const ActivePlanBtnText = styled.Text`
    fontSize: 8px;
    fontFamily: PoppinsMedium;
    color: ${primary};
    borderRadius: 5px;
`;
export const MyPlanTitle = styled.Text`
    fontSize: 17px;
    fontFamily: PoppinsSemiBold;
    color: ${black}
`;
export const ActivePriceContainer = styled.View`
    flexDirection: row;
    gap: 3px;
    alignItems: center;
`;
export const ActivePlanDuration = styled.Text`
    fontSize: 20px;
    color: ${labelColor};
`;
export const ActivePlanPrice = styled.Text`
    fontSize: 23px;
    fontFamily: PoppinsBold;
    color: ${black}
`;
export const StatusContainer = styled.View`
    flexDirection: column;
    gap: 10px;
`;
export const StatusText = styled.Text`
    fontSize: 10px;
    fontFamily: PoppinsRegular;
    color: ${black}
`;
export const StatusBtn = styled.View`
    background: ${success};
    padding: 10px;
    width: 100px;
    justifyContent: center;
    alignItems: center;
    borderRadius: 6px;
`;
export const StatusBtnText = styled.Text`
    fontSize: 10px;
    color: ${whiteColor};
`;
export const CtaBtnContainer = styled.View`
    flexDirection: column;
    gap: 15px;
    marginTop: 30px;
`;
export const ActiveUpgradeBtnText = styled.Text`
    fontSize: 15px;
    color: ${whiteColor};
`;
export const ActiveUpgradeBtn = styled.TouchableOpacity`
    background: ${primary};
    padding: 10px;
    width: 200px;
    height: 50px;
    justifyContent: center;
    alignItems: center;
    borderRadius: 10px;
`;
export const ActiveCancelBtn = styled.TouchableOpacity`
    border: 1px;
    borderColor: ${black};
    padding: 10px;
    width: 200px;
    height: 50px;
    justifyContent: center;
    alignItems: center;
    borderRadius: 10px;
`;
export const ActiveCancelBtnText = styled.Text`
    fontSize: 15px;
    color: ${black};
`;

export const PlanBenefitsContainer = styled.View`
    flexDirection: column;
    gap: 10px;
    marginTop: 40px;
`;
export const BenefitTitle = styled.Text`
    fontSize: 15px;
    fontFamily: PoppinsMedium;
`;
export const PlanBenefitsContent = styled.View`

`;
export const PlanBenefits = styled.Text`
    fontSize: 15px;

`;

export const MyPlanFooter = styled.View`
    flexDirection: column;
    gap: 5px;
    marginTop: 30px;
    marginBottom: 30px;
`;



// =============CARD SCREEN =================

export const CardsTabContainer = styled.View`
    flexDirection: row;
    gap: 10px;
`;
export const CardsTab = styled.View`
    paddingBottom: 7px;
`;
export const CardsTabText = styled.Text`
    fontSize: 17px;
    color: ${darkColor};
    fontFamily: PoppinsMedium;
`;


// ======CARDS ===========
export const CardContainer = styled.View`
    flexDirection: column;
    gap: 60px;
    width: 100%;
`;
export const PhysicalCardButton = styled.View`
    width: 100%;
    alignItems: center;
    background: ${primary};
    height: 50px;
    justifyContent: center;
    borderRadius: 7px;
`;
export const CardButtonText = styled.Text`
    fontSize: 14px;
    color: ${whiteColor};
    fontFamily: PoppinsMedium;
    textAlign: center;
`;
export const PhysicalCardContainer = styled.View`
    background: ${physicalCardColor};
    width: 100%;
    height: 200px;
    borderRadius: 20px;
    padding: 15px;
    marginTop: 60px;
`;
export const CardInner = styled.View`
    flexDirection: column;
    justifyContent: space-between; 
    flex: 1; 
`;
export const TopCard = styled.View`
`;
export const GoldPriviTextRight = styled.Text`
    fontSize: 15px;
    textAlign: right;
    fontFamily: PoppinsMedium;
    letterSpacing: 2px;
`; 

export const MiddleCard = styled.View`
    paddingTop: 20px;
`;
export const BottomCard = styled.View`
    flexDirection: row;
    justifyContent: space-between;
    alignItems: flex-end;
`;
export const BottomCardLeft = styled.View`
    flexDirection: column;
    gap: 10px;
`;
export const CardUsername = styled.Text`
    fontSize: 15px;
    fontFamily: PoppinsMedium;
`;
export const CardMembershipID = styled.Text`
    fontSize: 13px;
    fontFamily: PoppinsMedium;
`;
export const BottomCardRight = styled.View`
  
`;

// ============virtual card compnents============
export const VirtualCardContainer = styled.View`
    background: ${virtualCardColor};
    marginTop: 60px;
    width: 100%;
    height: 200px;
    borderRadius: 20px;
    padding: 15px;
`;
export const VirtualCardButton = styled.View`
    width: 100%;
    alignItems: center;
    background: ${virtualCardBtnColor};
    height: 50px;
    justifyContent: center;
    borderRadius: 7px;
`;

export const GoldPriviTextRightWhite = styled.Text`
    color: ${whiteColor};
    fontSize: 15px;
    textAlign: right;
    fontFamily: PoppinsMedium;
    letterSpacing: 2px;
`; 

export const CardUsernameWhite = styled.Text`
    fontSize: 15px;
    fontFamily: PoppinsMedium;
    color: ${whiteColor};
`;
export const CardMembershipIDYellow = styled.Text`
    fontSize: 13px;
    fontFamily: PoppinsMedium;
    color: ${primary};
`;



// =============CARD MODAL ===============

export const CardModalConatainer = styled.View`
    flex: 1;
    justifyContent: flex-end;
    alignItems: center;
    background: rgba(0, 0, 0, 0.5);
`;
export const CardModalInner = styled.View`
    background: ${backgroundColor};
    padding: 20px;
    height: 40%;
    borderTopLeftRadius: 50px;
    borderTopRightRadius: 50px;
    alignItems: center;
    width: 100%;
    flexDirection: column;
    justifyContent: space-between;
`;
export const CardNoticeIcon = styled.View`
    background: ${primaryVariant};
    height: 60px;
    width: 60px;
    borderRadius: 50px;
    alignItems: center;
    justifyContent: center;
`;
export const CardBtnContainer = styled.View`
    flexDirection: row;
    justifyContent: space-between;
    width: 100%;
`;
export const CardModalQuestion = styled.Text`
    fontSize: 14px;
    color: ${black};
    fontFamily: PoppinsRegular;
    textAlign: center;
    width: 90%;
`;
export const CardModalBtnCancel = styled.View`
    height: 50px;
    padding: 6px;
    justifyContent: center;
    alignItems: center;
    width: 150px;
    borderRadius: 7px;
`;
export const CardModalBtnBlock = styled.View`
    height: 50px;
    background: ${primary};
    padding: 6px;
    justifyContent: center;
    alignItems: center;
    width: 150px;
    borderRadius: 7px;
`;
export const CancelText = styled.Text`
    color: ${primary};
    fontSize: 14px;
    fontFamily: PoppinsRegular;
`;
export const BlockText = styled.Text`
    color: ${whiteColor};
    fontSize: 14px;
    fontFamily: PoppinsRegular;
`;










