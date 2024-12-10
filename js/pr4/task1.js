{
  const userProfile = {
    id: 12345,
    username: "coolcoder",
    email: "coolcoder@example.com",
    personalInfo: {
      firstName: "Анна",
      lastName: "Иванова",
      age: 28,
      city: "Москва"
    },
    skills: ["JavaScript", "React", "Node.js"],
    education: {
      degree: "Магистр",
      major: "Компьютерные науки",
      university: "МГУ"
    },
    isEmployed: true
  };

  const info = (fullname, education) => {
    console.log(`Полное имя: ${fullname}; Образование: ${education}`)
  }
  const analyzeProfile = (userProfile) => {
    analyzedProfile = {
      fullname: `${userProfile.personalInfo.firstName} ${userProfile.personalInfo.lastName}`,
      contact: userProfile.email,
      age: userProfile.personalInfo.age,
      topSkill: userProfile.skills[0],
      education: `${userProfile.education.degree}, ${userProfile.education.major}`,
      employmentStatus: userProfile.isEmployed ? 'Работает' : 'Не работает',
    }
    
    let {fullname, education} = analyzedProfile
    info(fullname, education)

    return analyzedProfile
  }

  globalThis.userProfile = userProfile;
  globalThis.analyzeProfile = analyzeProfile;
}

console.log(analyzeProfile(userProfile))
