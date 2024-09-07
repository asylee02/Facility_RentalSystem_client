interface Props {
  errorType: string;
  min?: string;
  max?: string;
}

function errorMessage({ errorType, min, max }: Props) {
  if (errorType === 'minLength' && min) {
    return `최소 ${min}글자 이상 입력해야 합니다.`;
  }
  if (errorType === 'maxLength' && max) {
    return `최대 ${max}글자 이하 입력해야 합니다.`;
  }
  if (errorType === 'required') {
    return `필수 입력 항목입니다.`;
  }
  return ''; // 에러 타입이 일치하지 않을 때 빈 문자열 반환
}

export default errorMessage;
