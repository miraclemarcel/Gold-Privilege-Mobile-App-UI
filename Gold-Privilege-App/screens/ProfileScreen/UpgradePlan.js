import React, { useState} from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { UserPlanData } from './PlanData'

import { 
    AllUserPlans, 
    ChoosePlanText, 
    InnerContainer, 
    PageTitle, 
    PageTitleHeader, 
    PlanDuration, 
    PlanFooter, 
    PlanFooterText, 
    PlanLine, 
    PlanPrice, 
    PlanPriceContainer, 
    StyledContainer, 
    UserPlanContainer, 
    UserPlanTitle,
    Colors
} from '../../styles/Style'


const UpgradePlan = () => {
    const [selectedPlan, setSelectedPlan] = useState(null);

    const handlePlanSelect = (planId) => {
        setSelectedPlan(planId);
    };


  return (
    <SafeAreaView style={{ flex: 1 }}>
        <PageTitleHeader>
            <PageTitle>Upgrade Plan</PageTitle>
        </PageTitleHeader>
        <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        >
        <StyledContainer>
            <InnerContainer>
            <View style={{marginBottom: 20}}>
                <ChoosePlanText>Choose A Plan </ChoosePlanText>
            </View>
            <AllUserPlans>
            {UserPlanData.map(plan => (
                <TouchableOpacity    
                    key={plan.id}
                    onPress={() => handlePlanSelect(plan.id)}
                >
                <UserPlanContainer 
                style={{
                    backgroundColor:
                        selectedPlan === plan.id ? Colors.primary : Colors.backgroundColor,
                }}
                >
                    <UserPlanTitle>{plan.membershipType}</UserPlanTitle>
                    <PlanLine/>
                    <PlanPriceContainer>
                        <PlanPrice>{plan.membershipPrice}</PlanPrice>
                        <PlanDuration>{plan.membershipDuration}</PlanDuration>
                    </PlanPriceContainer>
                    <PlanFooter>
                        {plan.PlanPackage.map((offer, index) => ( 
                           <React.Fragment key={index}>
                            <PlanFooterText>{offer.offerOne}</PlanFooterText>
                            <PlanFooterText>{offer.offerTwo}</PlanFooterText>
                            <PlanFooterText>{offer.offerThree}</PlanFooterText>
                       </React.Fragment>
                        ))}
                    </PlanFooter>
                </UserPlanContainer>
                </TouchableOpacity>
                ))}
            </AllUserPlans>
            </InnerContainer>
        </StyledContainer>
        </ScrollView>
      
    </SafeAreaView>
  )
}

export default UpgradePlan
