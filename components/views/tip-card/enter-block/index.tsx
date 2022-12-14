import * as ST from './styled';
import { Dispatch, FC, SetStateAction } from 'react';
import DollarIcon from 'assets/tip-calculator/images/icon-dollar.svg';
import PersonIcon from 'assets/tip-calculator/images/icon-person.svg';
import { Tips } from 'constants/tip-calculator/Tips';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Placeholders } from 'constants/tip-calculator/Placeholders';
import { Messages } from 'constants/tip-calculator/Messages';

const tips = [Tips.FIVE, Tips.TEN, Tips.FIFTEEN, Tips.TWENTY_FIVE, Tips.FIFTY];

enum Fields {
  BILL = 'bill',
  TIP = 'tip',
  NUMBER_OF_PERSON = 'numberOfPerson',
}

const fieldsType = 'number';
const moreThanRule = 0;

interface Props {
  bill?: number | string;
  tip?: number | string;
  numberOfPerson?: number | string;
  handleBill: Dispatch<SetStateAction<number>>;
  handleTip: Dispatch<SetStateAction<number>>;
  handleNumberOfPerson: Dispatch<SetStateAction<number>>;
}

const EnterBlock: FC<Props> = ({
  bill,
  tip,
  numberOfPerson,
  handleBill,
  handleTip,
  handleNumberOfPerson,
}) => {
  const { handleBlur, values, errors, touched, handleChange, validateField } =
    useFormik({
      enableReinitialize: true,
      initialValues: {
        bill: bill || '',
        tip: tip || '',
        numberOfPerson: numberOfPerson || '',
      },
      validationSchema: Yup.object().shape({
        bill: Yup.number()
          .required(Messages.EMPTY)
          .moreThan(moreThanRule, Messages.BILL_MORE_THAN_ZERO),
        tip: Yup.number()
          .required(Messages.NOT_SELECTED)
          .moreThan(moreThanRule, Messages.TIP_MORE_THAN_ZERO),
        numberOfPerson: Yup.number()
          .required(Messages.EMPTY)
          .moreThan(moreThanRule, Messages.NUMBER_OF_PERSON_MORE_THAN_ZERO)
          .integer(Messages.NUMBER_OF_PERSON_INTEGER),
      }),
      onSubmit: () => {},
    });

  const onBlur = (
    e: React.FocusEvent<HTMLInputElement>,
    id: Fields,
    valueHandler: Dispatch<SetStateAction<number>>,
  ) => {
    handleBlur(e);
    validateField(id).then();
    !errors[id] && valueHandler(+values[id]);
  };

  return (
    <ST.Container>
      <ST.BillBlock>
        <ST.Label>Bill</ST.Label>
        <ST.IconField>
          <ST.IconWrapper>
            <DollarIcon />
          </ST.IconWrapper>
          <ST.Field
            type={fieldsType}
            error={!!(touched.bill && errors.bill)}
            id={Fields.BILL}
            name={Fields.BILL}
            placeholder={Placeholders.BILL}
            value={values.bill}
            onChange={handleChange}
            onBlur={(e) => onBlur(e, Fields.BILL, handleBill)}
          />
        </ST.IconField>
        <ST.ErrorMessage>{touched.bill && errors.bill}</ST.ErrorMessage>
      </ST.BillBlock>
      <ST.TipBlock>
        <ST.Label>Select Tip</ST.Label>
        <ST.Tips>
          {tips.map((item) => (
            <ST.Tip
              key={item}
              selected={tip === item}
              onClick={() => handleTip(item)}
            >
              {item}%
            </ST.Tip>
          ))}
          <ST.Field
            type={fieldsType}
            error={!!(touched.tip && errors.tip)}
            id={Fields.TIP}
            name={Fields.TIP}
            placeholder={Placeholders.TIP}
            value={tips.includes(+values.tip) ? '' : values.tip}
            onChange={handleChange}
            onBlur={(e) => onBlur(e, Fields.TIP, handleTip)}
          />
        </ST.Tips>
        <ST.ErrorMessage>{touched.tip && errors.tip}</ST.ErrorMessage>
      </ST.TipBlock>
      <ST.PersonBlock>
        <ST.Label>Number of People</ST.Label>
        <ST.IconField>
          <ST.IconWrapper>
            <PersonIcon />
          </ST.IconWrapper>
          <ST.Field
            type={fieldsType}
            error={!!(touched.numberOfPerson && errors.numberOfPerson)}
            id={Fields.NUMBER_OF_PERSON}
            name={Fields.NUMBER_OF_PERSON}
            placeholder={Placeholders.NUMBER_OF_PERSON}
            value={values.numberOfPerson}
            onChange={handleChange}
            onBlur={(e) =>
              onBlur(e, Fields.NUMBER_OF_PERSON, handleNumberOfPerson)
            }
          />
        </ST.IconField>
        <ST.ErrorMessage>
          {touched.numberOfPerson && errors.numberOfPerson}
        </ST.ErrorMessage>
      </ST.PersonBlock>
    </ST.Container>
  );
};

export default EnterBlock;
