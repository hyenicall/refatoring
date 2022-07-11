let defaultOwner = { firstName: '마틴', lastName: '파울러' }

export function getDefaultOwner() {
  return { ...defaultOwner } //얕은 복사( 중첩 객체라면 중첩된 객체는 주소값이 전달되기 때문에 수정이 가능해 진다)
}
