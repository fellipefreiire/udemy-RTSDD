const formatDate = (date: string): string => {
  const formattedDate = new Date(date)
  const day =
    formattedDate.getDate() + 1 > 9
      ? formattedDate.getDate() + 1
      : `0${formattedDate.getDate() + 1}`
  const month =
    formattedDate.getMonth() + 1 > 9
      ? formattedDate.getMonth() + 1
      : `0${formattedDate.getMonth() + 1}`
  const year = formattedDate.getFullYear()

  return `${day}/${month}/${year}`
}

export default formatDate
