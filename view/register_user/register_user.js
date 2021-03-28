import datepicker from 'js-datepicker'

const isSafari = () => {
  const userAgent =  navigator.userAgent.toLowerCase()
  if (userAgent.indexOf('safari') !== -1 && userAgent.indexOf('mac') !== -1) {
    return true
  }
  return false
}

// safariならばjs-datepickerでdateをもってくるように
// safariはデフォでdate pickerのuiがないので。
if (isSafari()) {
  const birthdayPicker = datepicker('#birthday', {
    customDays: ['日', '月', '火', '水', '木', '金', '土'],
    formatter: (input, date, instance) => {
      const yearString = String(date.getFullYear())
      var monthString = String(date.getMonth() + 1)
      if (monthString.length == 1) monthString = "0" + monthString
      var dateString = String(date.getDate())
      if (dateString.length == 1) dateString = "0" + dateString
      input.value = `${yearString}-${monthString}-${dateString}`
    }
  })
}