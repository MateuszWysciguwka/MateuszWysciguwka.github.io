const gameProjects = [
  {
    title: "CupaGoovno",
    img: "projects/gamedev/cupagoovno/cg_moai_boss.png",
    tags: ["Unity", "C#", "Machine learning"],
    link: "projects/gamedev/cupagoovno/cupagoovno.html"
  },
  {
    title: "Boberhead",
    img: "projects/gamedev/boberhead/bh_bober.png",
    tags: ["Unity", "C#"],
    link: "projects/gamedev/boberhead/boberhead.html"
  },
  {
    title: "Relentless",
    img: "projects/gamedev/relentless/relentless_1.png",
    tags: ["Unreal Engine 5", "C++", "Pathfinding"],
    link: "projects/gamedev/relentless/relentless.html"
  },
  {
    title: "TablesXP",
    img: "projects/gamedev/tablesxp/xp_title.png",
    tags: ["Unity", "C#"],
    link: "projects/gamedev/tablesxp/tablesxp.html"
  },
  {
    title: "2D Dungeon Generator",
    img: "projects/gamedev/dungeon/dg_1.png",
    tags: ["Unity", "C#", "Procedural generation"],
    link: "projects/gamedev/dungeon/dungeon.html"
  }
];

const otherProjects = [
  {
    title: "SpaceMath - Backend",
    img: "projects/other/spacemath/math_2.png",
    tags: [".NET", "Entity Framework", "C#", "SQL", "Docker", "REST API"],
    link: "projects/other/spacemath/spacemath.html"
  },
  {
    title: "BetterTwitter",
    img: "projects/other/bettertwitter/bt_2.png",
    tags: ["Flask", "Python", "SQL", "React", "JavaScript", "Data encryption & security"],
    link: "projects/other/bettertwitter/bettertwitter.html"
  },
  {
    title: "Rainbow Tables Generator",
    img: "projects/other/rainbow/rainbow_1.png",
    tags: ["C++", "CUDA", "DES"],
    link: "projects/other/rainbow/rainbow.html"
  },
  {
    title: "Simple 3D Graphics Engine",
    img: "projects/other/3dengine/3d_1.png",
    tags: ["Python", "PyGame", "Rendering"],
    link: "projects/other/3dengine/3dengine.html"
  },
  {
    title: "Text File Compressor",
    img: "projects/other/compressor/comp_c_1.png",
    tags: ["C", "Java", "JavaFX", "File compression"],
    link: "projects/other/compressor/compressor.html"
  }
]

function render(list, id) {
  const container = document.getElementById(id);

  list.forEach(p => {
    const el = document.createElement('a');
    el.className = 'card';
    el.href = p.link;

    el.innerHTML = `
      <img src="${p.img}" />
      <div class="card-body">
        <h3>${p.title}</h3>
        <div class="tags">
          ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
      </div>
    `;

    container.appendChild(el);
  });
}

render(gameProjects, 'projects');
render(otherProjects, 'other');
