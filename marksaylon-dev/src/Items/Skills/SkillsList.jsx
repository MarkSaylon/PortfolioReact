import Skills from './Skills.jsx'

function SkillsList({skillList}){

    return(
        skillList.map((skill) => (
            <Skills key={skill.id}
                    skillName={skill.name}
                    prof={skill.prof}
                    desc={skill.desc}/>
        ))
    );

}

export default SkillsList