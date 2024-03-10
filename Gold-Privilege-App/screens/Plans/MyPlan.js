import React, { useState } from 'react'
import { Text, View, ScrollView, Modal, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'



import { ActiveCancelBtn, Colors, ActiveCancelBtnText, ActivePlanBtn, ActivePlanBtnText, ActivePlanDuration, ActivePlanPrice, ActivePriceContainer, ActiveUpgradeBtn, ActiveUpgradeBtnText, BenefitTitle, BlockText, CancelText, CardBtnContainer, CardModalBtnBlock, CardModalBtnCancel, CardModalConatainer, CardModalInner, CardModalQuestion, CardNoticeIcon, CtaBtnContainer, InnerContainer, MyPlanContainer, MyPlanFooter, MyPlanTitle, PageTitle, PageTitleHeader, PlanBenefits, PlanBenefitsContainer, PlanBenefitsContent, PlanHeaderContainer, StatusBtn, StatusBtnText, StatusContainer, StatusText, StyledContainer } from '../../styles/Style'
import { Ionicons, Octicons } from '@expo/vector-icons';


const BenefitsData = [
    {id: 1, benefits: "10% Room discount" },
    {id: 2, benefits: "Loyalty Points" },
    {id: 3, benefits: "Body Massage" },
    {id: 4, benefits: "Buffet" },
    {id: 5, benefits: "Aerobics" },
    {id: 6, benefits: "Loyalty Points" },
    {id: 7, benefits: "Body Massage" },
    {id: 8, benefits: "Food Voucher" },
    {id: 9, benefits: "Aerobics" },
    {id: 10, benefits: "Airport Pickup" },
    {id: 11, benefits: "Gym Access" },
];


const splitBenefitsData = () => {
    const halfLength = Math.ceil(BenefitsData.length / 2);
    const firstHalf = BenefitsData.slice(0, halfLength);
    const secondHalf = BenefitsData.slice(halfLength);
    return [firstHalf, secondHalf];
  }

  const Bullet = () => <Text style={{ fontSize: 15, marginRight: 5 }}>{'\u2022'}</Text>;
  
const MyPlan = () => {
    const [firstRow, secondRow] = splitBenefitsData();
    const [modalVisible, setModalVisible] = useState(false); // State to control modal visibility

  // Function to handle blocking the card
  const blockCard = () => {
    // blocking logic here
    setModalVisible(false); // Close the modal after blocking
  };

  return (
   <SafeAreaView style={ {flex: 1} }>
        <PageTitleHeader>
            <PageTitle>My Plan</PageTitle>
        </PageTitleHeader>
        <StyledContainer>
            <ScrollView 
                showsVerticalScrollIndicator={false}
            >
            <MyPlanContainer>
                <PlanHeaderContainer>
                    <ActivePlanBtn>
                        <ActivePlanBtnText>Current Plan</ActivePlanBtnText>
                    </ActivePlanBtn>
                    <MyPlanTitle>Gold Membership Plan</MyPlanTitle>
                    <ActivePriceContainer>
                        <ActivePlanDuration>Monthly</ActivePlanDuration>
                        <ActivePlanPrice>/N100,000</ActivePlanPrice>
                    </ActivePriceContainer>
                    <StatusContainer>
                        <StatusText>Status:</StatusText>
                        <StatusBtn>
                            <StatusBtnText>Active</StatusBtnText>
                        </StatusBtn>
                    </StatusContainer>
                    <CtaBtnContainer>
                        <ActiveUpgradeBtn activeOpacity={0.8}>
                            <ActiveUpgradeBtnText>Upgrade Plan</ActiveUpgradeBtnText>
                        </ActiveUpgradeBtn>
                        <ActiveCancelBtn activeOpacity={0.8} onPress={() => setModalVisible(true)}>
                            <ActiveCancelBtnText>Cancel Subscription</ActiveCancelBtnText>
                        </ActiveCancelBtn>
                    </CtaBtnContainer>
                </PlanHeaderContainer>
                <PlanBenefitsContainer>
                    <BenefitTitle>Benefits: </BenefitTitle>
                    <PlanBenefitsContent>
                    <View style={{ flexDirection: 'row' }}>
                            <View style={{ flex: 1 }}>
                                {firstRow.map(benefit => (
                                    <PlanBenefits key={benefit.id}>{benefit.benefits}</PlanBenefits>
                                ))}
                                  <Text>.</Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                {secondRow.map(benefit => (
                                    <PlanBenefits key={benefit.id}>{benefit.benefits}</PlanBenefits>
                                ))}
                            </View>
                        </View>
                    </PlanBenefitsContent>
                </PlanBenefitsContainer>
                <MyPlanFooter>
                    <Text style={{ fontFamily: 'PoppinsRegular' }}>
                        Member since <Text style={{ fontFamily: 'PoppinsSemiBold' }}>14 June 2023</Text>
                    </Text>
                    <Text style={{ fontFamily: 'PoppinsRegular' }}>
                        Renew Subscription by <Text style={{ fontFamily: 'PoppinsSemiBold' }}>14 January 2023</Text>
                    </Text>
                    </MyPlanFooter>
            </MyPlanContainer>
            </ScrollView>
        </StyledContainer>

        {/* Modal for confirming card blocking */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <CardModalConatainer>
          <CardModalInner >
            <CardNoticeIcon>
                <Octicons name="alert" size={24} color={Colors.primary}/>
            </CardNoticeIcon>
            <CardModalQuestion>You are about to cancel your Gold Privilege subscription plan, Are you sure about this action?</CardModalQuestion>
            <CardBtnContainer>
            <TouchableOpacity onPress={() => setModalVisible(false)} activeOpacity={0.9}>
                <CardModalBtnCancel>
                    <CancelText>No</CancelText>
                </CardModalBtnCancel>
              </TouchableOpacity>
              <TouchableOpacity style={{ marginRight: 20 }} onPress={blockCard} activeOpacity={0.9}>
                <CardModalBtnBlock>
                    <BlockText>Yes! Cancel</BlockText>
                </CardModalBtnBlock>
              </TouchableOpacity>
            </CardBtnContainer>
          </CardModalInner>
        </CardModalConatainer>
      </Modal>

   </SafeAreaView>
  )
}

export default MyPlan
