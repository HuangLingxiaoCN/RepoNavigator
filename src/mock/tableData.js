const data = [];

for(let i=0; i< 20; i++) {
    data.push({
        key: i,
        name: `My Repository ${i}`,
        id: `29411307${i}`,
        description: "No Description",
        forked: "No",
        collaborators: 10,
        contributors: 40,
        forks: i,
        stars: 100,
        createdAt: "2021/12/22",
        updatedAt: "2022/12/22",
    })
}

export default data;