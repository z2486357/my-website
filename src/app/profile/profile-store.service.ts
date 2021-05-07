import { Injectable } from '@angular/core';

@Injectable()
export class ProfileStoreService {
  profileChoose = "work";

  experience = {
    ibm: {
      name: "ibm",
      topic: "Application Developer",
      secondTopic: "IBM",
      period: "02.2020 - 01.2021",
      type: "work",
      detail: false,
      description: ["- Get the requirements from the client and discuss with the team member to figure out what they need and implement it in the application.",
        "- Contribute in a group to build a system helping the client for business management."],
    },
    free: {
      name: "free",
      topic: "Full-Stack Developer",
      secondTopic: "Freelancer",
      period: "08.2019 - 12.2019",
      type: "work",
      detail: false,
      description: ["- Get the requirement from the client and implement it in the web application.",
        "- Build the web application to collect the potential client’s client data and send it to the client after every time period."],
    },
    enfotech: {
      name: "enfotech",
      topic: "Full-Stack Developer",
      secondTopic: "Enfotech",
      period: "04.2019 - 07.2019",
      type: "work",
      detail: false,
      description: ["- Discuss the requirements of the client with business analyst to figure out what they need and implement it in the application.",
        "- Contribute in a developer group to build a system helping the client for business management."],
    },
    military: {
      name: "military",
      topic: "Alternative Military Service",
      secondTopic: "Chiayi City Government",
      period: "08.2017 - 08.2018",
      type: "work",
      detail: false,
      description: ["- In Taiwan, every healthy man has to finish 1 year military service "
        + "if you are born before 1993 (include). Alternative Military Service is a way that "
        + "you can finish your duty by serving public."],
    },
    liteon: {
      name: "liteon",
      topic: "Intern",
      secondTopic: "Liteon",
      period: "11.2015 - 08.2017",
      type: "work",
      detail: false,
      description: ["- Build a system to help the company to rearrange previous data in a "
        + "reasonable standard so the data can be used more easily",
      "- The system can also analyze the data, predict the future performance "
      + "and mark the data which should be notice due to the data and the "
      + "prediction, so that the company can easily find the company which are "
      + "not qualified from hundreds of its cooperating company",
        "- Use Python, Matlab and C# for building the system",
        "- Use Artificial Neural Network for the prediction"],
    },
    ra: {
      name: "ra",
      topic: "Research Assitant",
      secondTopic: "National Tsing Hua University",
      period: "07.2015 - 08.2017",
      type: "work",
      detail: false,
      description: ["- Accomplish the industry-academy cooperation mentioned below",
        "- Manage the equipment of the Laboratory (Ex. Motion tracking system, VR device)",
        "- Demo and teach the way of using equipment to junior students",
        "- Troubleshoot the problem of the equipment"],
    },
    manzai: {
      name: "manzai",
      topic: "Summer Intern",
      secondTopic: "Manzai Industry",
      period: "07.2014 - 08.2014",
      type: "work",
      detail: false,
      description: ["- Improve manufacturing process to reduce the waste of human resource",
        "- Use Lean Production to review process flow for reducing the stack in process",
        "- Develop management control and production information record system " +
        "to accomplish real time manufacturing control and product tracing"],
    },
    ta: {
      name: "ta",
      topic: "Teaching Assistant",
      secondTopic: "National Tsing Hua University",
      period: "09.2016 - 01.2017",
      type: "work",
      detail: false,
      description: ["- Teaching Assistant of the class Biomechanics"],
    },
    ms: {
      name: "ms",
      topic: "Master's Degree",
      secondTopic: "National Tsing Hua University",
      period: "07.2015 - 08.2017",
      type: "education",
      detail: false,
      description: ["- Major in Industrial Engineering and Engineering Management",
        "- Focus on Ergonomics"],
    },
    bs: {
      name: "bs",
      topic: "Bachelor's Degree",
      secondTopic: "National Tsing Hua University",
      period: "09.2011 - 06.2015",
      type: "education",
      detail: false,
      description: ["- Major in Industrial Engineering and Engineering Management",
        "- Minor in Computer Science"],
    }
  }

  constructor() { }


}
