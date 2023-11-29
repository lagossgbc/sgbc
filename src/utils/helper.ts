
const openLink = (link: string) => {
  window.open(link)
}

const removeHashAndFollowing = (inputString: string): string => {
  const hashIndex = inputString.indexOf('#');

  if (hashIndex !== -1) {
      return inputString.slice(0, hashIndex);
  }
  return inputString;
}

export {
  openLink,
  removeHashAndFollowing
};