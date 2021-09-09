import {loremIpsum,LoremIpsum,fullname,username,Avatar} from "react-lorem-ipsum"
import Unsplash from 'react-unsplash-wrapper'

export const user = {name:fullname(), uname:username(), img:Avatar}
export const post = {
  publishedby:user,
  img:Unsplash,
  heading:loremIpsum({avgSentencesPerParagraph:1,p:1,avgWordsPerSentence:5}),
  summery:loremIpsum({avgSentencesPerParagraph:2,p:1}),
  content:loremIpsum({avgSentencesPerParagraph:12,p:5}),
  date: "11 September, 2021",
  reading:2
}