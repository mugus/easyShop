import React, { useState } from 'react';
import { View, Button } from 'react-native';
import {
  Container,
  Header,
  Content,
  ListItem,
  Text,
  Radio,
  Right,
  Left,
  Picker,
  Icon,
  Body,
  Title,
  Card,
} from 'native-base';
import { CardField, useStripe } from '@stripe/stripe-react-native';

const methods = [
  // { name: 'Cash on Delivery', value: 1 },
  // { name: 'Bank Transfer', value: 2 },
  // { name: 'Card Payment', value: 3 },
  { name: 'Stripe', value: 4 },
];

const paymentCards = [
  { name: 'Wallet', value: 1 },
  { name: 'Visa', value: 2 },
  { name: 'MasterCard', value: 3 },
  { name: 'Other', value: 4 },
];

const Payment = (props) => {
  const { confirmPayment } = useStripe();
  // const order = props.route.params;

  const [select, setSelect] = useState();
  const [card, setCard] = useState();
  

  const { createPaymentMethod, handleCardAction } = useStripe();

  const pay = () => {
    // Gather customer billing information (for example, email)
    const billingDetails: CreatePaymentMethod.BillingDetails = {card};

    // Create payment method
    const { paymentMethod, error } = createPaymentMethod({
      paymentMethodType: 'Card',
      paymentMethodData: {
        billingDetails,
      }

    });
    const order = props.route.params;
    props.navigation.navigate('Confirm', { order })
    console.log("Data: ",billingDetails);
  };

  return (
    <Container>
      <Header>
        <Body>
          <Title>Confirm your payment</Title>
        </Body>
      </Header>
      <Content>
        <Card>
          
        <CardField
          postalCodeEnabled={true}
          placeholders={{
            number: '4242 4242 4242 4242',
          }}
          cardStyle={{
            backgroundColor: '#FFFFFF',
            textColor: '#000000',
          }}
          style={{
            width: '100%',
            height: 50,
            marginVertical: 30,
          }}
          onCardChange={(cardDetails) => {
            setCard(cardDetails)
            console.log('cardDetails', cardDetails);
          }}
          onFocus={(focusedField) => {
            console.log('focusField', focusedField);
          }}
        />

        </Card>



        {/* {methods.map((item) => (
          <ListItem key={item.name} onPress={() => setSelect(item.value)}>
            <Left>
              <Text>{item.name}</Text>
            </Left>
            <Right>
              <Radio selected={select === item.value} />
            </Right>
          </ListItem>
        ))}
        {select === 3 ? (
          <Picker
            mode='dropdown'
            iosIcon={<Icon name={'arrow-down'} />}
            headerStyle={{ backgroundColor: 'orange' }}
            headerBackButtonTextStyle={{ color: '#fff' }}
            headerTitleStyle={{ color: '#fff' }}
            selectedValue={card}
            onValueChange={(x) => setCard(x)}
          >
            {paymentCards.map((c) => (
              <Picker.Item label={c.name} value={c.name} />
            ))}
          </Picker>
        ) : null} */}
        <View style={{ marginTop: 20, width: '90%', alignSelf: 'center' }}>
          {
            card ?
            <Button
                title={'Confirm'}
                onPress={pay}
                // onPress={() => props.navigation.navigate('Confirm', { order })}
              />
             : 
             <Button
                title={'Waiting'}
                onPress={() => alert("Card content is required")}
              />
          }
          
        </View>
      </Content>
    </Container>
  );
};

export default Payment;
