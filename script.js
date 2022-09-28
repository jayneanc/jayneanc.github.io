// Variables
var activeCompany = 0;
var activeAbility = 0;
var activeProjectImg = 0;
showActiveField("company", activeCompany);
showActiveField("ability", activeAbility);
abilityPercent(activeAbility);
animateShowText();
getProjectDetail();
getProjectList();

// [ Open url ]
// Open url in new tab
function openURL(url) {
  window.open(url, "_blank");
}

// [ Scroll to page ]
// Scroll to page with matched id
function scrollToPage(id) {
  const element = document.getElementById(id);
  element.scrollIntoView();
}

// [ Active field ]
// Display filed content & show active layout for experience/ability
function showActiveField(field, index) {
  const texts = document.getElementsByClassName(`${field}-text`);
  const icons = document.getElementsByClassName(`${field}-icon`);
  const contents = document.getElementsByClassName(`${field}-content`);

  for (let i = 0; i < icons.length; i++) {
    if (i === index) {
      texts[i].style.backgroundColor = "var(--green2-3)";
      texts[i].style.fontWeight = "600";
      texts[i].style.color = "var(--green1)";
      icons[i].style.color = "var(--green1)";
      contents[i].style.display = "flex";
    } else {
      texts[i].style.backgroundColor = "transparent";
      texts[i].style.fontWeight = "500";
      texts[i].style.color = "var(--grey1)";
      icons[i].style.color = "var(--green2-7)";
      contents[i].style.display = "none";
    }
  }
}
// Update active company
function setActiveComp(index) {
  activeCompany = index;
  showActiveField("company", index);
}
// Update active ability
function setActiveAbility(index) {
  activeAbility = index;
  showActiveField("ability", index);
  abilityPercent(index);
}

// [ Ability percentages ]
// Show ability percentages text and progress
function abilityPercent(index) {
  const percent = abilities[index];
  const content = document.getElementsByClassName("ability-content")[index];

  for (let i = 0; i < percent.length; i++) {
    let bar = null;
    const barDiv = content.getElementsByClassName("progress-percent");

    if (barDiv.length < i + 1) {
      const { field, newBar } = buildProgressBar(percent[i]);
      content.appendChild(field);
      bar = newBar;
    } else {
      bar = barDiv[i];
    }

    // Animate progress bar
    var width = 0;
    var id = setInterval(() => {
      if (width >= percent[i].percent) {
        clearInterval(id);
      } else {
        width++;
        bar.style.width = width + "%";
      }
    }, 20);
  }
}
// Build progress bar elements
function buildProgressBar(ability) {
  const { name, percent } = ability;

  // Elements
  const field = document.createElement("div");
  const textDiv = document.createElement("div");
  const text = document.createElement("a");
  const percentTextDiv = document.createElement("div");
  const percentText = document.createElement("a");
  const percentSymbol = document.createElement("i");
  const barDiv = document.createElement("div");
  const barBackground = document.createElement("div");
  const barPercent = document.createElement("div");
  field.appendChild(textDiv);
  textDiv.appendChild(text);
  textDiv.appendChild(percentTextDiv);
  percentTextDiv.appendChild(percentText);
  percentTextDiv.appendChild(percentSymbol);
  field.appendChild(barDiv);
  barDiv.appendChild(barBackground);
  barDiv.appendChild(barPercent);

  // Classes
  field.className = "flex-column field";
  textDiv.className = "flex h-between text";
  percentTextDiv.className = "flex v-center";
  percentSymbol.className = "fa fa-percent";
  barDiv.className = "progress-bar";
  barBackground.className = "background";
  barPercent.className = "progress-percent";

  // Texts
  text.innerHTML = name;
  percentText.innerHTML = percent;

  return { field, newBar: barPercent };
}

// [ Projects ]
// Build project list
function getProjectList() {
  const project = document.getElementById("project");
  const content = project.getElementsByClassName("content")[0];

  for (let i = 0; i < projects.length; i++) {
    const { name, types } = projects[i];

    // Elements
    const container = document.createElement("div");
    const card = document.createElement("div");
    const cardContent = document.createElement("div");
    const icon = document.createElement("i");
    const title = document.createElement("a");
    const info = document.createElement("a");
    const cardBox = document.createElement("div");
    const cardBackground = document.createElement("div");
    content.appendChild(container);
    container.appendChild(card);
    container.appendChild(cardBox);
    card.appendChild(cardContent);
    cardContent.appendChild(icon);
    cardContent.appendChild(title);
    cardContent.appendChild(info);
    cardBox.appendChild(cardBackground);

    // Classes
    container.className = "flex card-container";
    card.className = "flex h-center v-center card";
    cardContent.className = "flex-column v-center";
    icon.className = "fa fa-folder-open";
    info.className = "info";
    cardBox.className = "flex h-center card-box";

    // Texts
    title.innerHTML = name;
    info.innerHTML = "- " + types;

    // Click event - display detail
    container.onclick = () => {
      const element = project.getElementsByClassName("detail")[i];
      cardBox.classList.add("card-click");
      setTimeout(() => {
        toggleProjectDetail(true, element);
        cardBox.classList.remove("card-click");
      }, 500);
    };
  }
}
// Build project detail
function getProjectDetail() {
  const project = document.getElementById("project");

  for (let i = 0; i < projects.length; i++) {
    const { name, images, details, tags } = projects[i];

    // Elements
    const detail = document.createElement("div");
    const detailContent = document.createElement("div");
    const closeIcon = document.createElement("i");
    const carousel = document.createElement("div");
    const carouselContent = document.createElement("div");
    const carouselIconLeftDiv = document.createElement("div");
    const carouselIconLeft = document.createElement("i");
    const carouselImg = document.createElement("img");
    const carouselIconRightDiv = document.createElement("div");
    const carouselIconRight = document.createElement("i");
    const pagination = document.createElement("div");
    const textContainer = document.createElement("div");
    const textTitle = document.createElement("a");
    const textDetail = document.createElement("a");
    const textTags = document.createElement("div");
    project.appendChild(detail);
    detail.appendChild(detailContent);
    detailContent.appendChild(closeIcon);
    detailContent.appendChild(carousel);
    detailContent.appendChild(textContainer);
    carousel.appendChild(carouselContent);
    carousel.appendChild(pagination);
    carouselContent.appendChild(carouselIconLeftDiv);
    carouselContent.appendChild(carouselImg);
    carouselContent.appendChild(carouselIconRightDiv);
    carouselIconLeftDiv.appendChild(carouselIconLeft);
    carouselIconRightDiv.appendChild(carouselIconRight);
    textContainer.appendChild(textTitle);
    textContainer.appendChild(textDetail);
    textContainer.appendChild(textTags);

    // Implement # of pages for carousel images
    for (let j = 0; j < images.length; j++) {
      const paginationBar = document.createElement("div");
      pagination.appendChild(paginationBar);

      // Click event
      paginationBar.onclick = () => {
        getCarouselImage(pagination, carouselImg, images, j);
      };

      // Active img color
      if (j === 0) {
        paginationBar.classList.add("active");
      }
    }

    // Implement tags
    buildTag(textTags, tags.front, "front");
    buildTag(textTags, tags.database, "database");
    buildTag(textTags, tags.others, "others");

    // Classes
    detail.className = "flex h-center v-center detail";
    detailContent.className = "flex-column v-center detail-content";
    closeIcon.className = "fa fa-close detail-close";
    carousel.className = "flex-column h-center v-center";
    carouselContent.className = "flex h-center v-center";
    carouselIconLeftDiv.className = "flex h-center v-center detail-icon";
    carouselIconRightDiv.className = "flex h-center v-center detail-icon";
    carouselIconLeft.className = "fa fa-chevron-left";
    carouselIconRight.className = "fa fa-chevron-right";
    pagination.className = "flex h-center detail-pagination";
    textContainer.className = "flex-column v-center detail-text-container";
    textTitle.className = "title";
    textTags.className = "flex detail-tags";

    // Image
    carouselImg.src = images[0];

    // Texts
    textTitle.innerHTML = name;
    textDetail.innerHTML = details;

    // Click event
    // [ Hide detail ]
    closeIcon.onclick = () => {
      const project = document.getElementById("project");
      const cardBox = project.getElementsByClassName("card-box")[i];

      detailContent.classList.add("close")
      setTimeout(() => {
        toggleProjectDetail(false, detail);
        detailContent.classList.remove("close")
        cardBox.classList.add("card-click-back");
      }, 500);
      setTimeout(() => {
        cardBox.classList.remove("card-click-back");
      }, 1000);
    };
    // [ Update carousel image ]
    carouselIconLeftDiv.onclick = () => {
      activeProjectImg--;
      activeProjectImg =
        activeProjectImg < 0 ? images.length - 1 : activeProjectImg;
      getCarouselImage(pagination, carouselImg, images, activeProjectImg);
    };
    carouselIconRightDiv.onclick = () => {
      activeProjectImg++;
      activeProjectImg =
        activeProjectImg >= images.length ? 0 : activeProjectImg;
      getCarouselImage(pagination, carouselImg, images, activeProjectImg);
    };
  }
}
// Build tag elements
function buildTag(container, data, type) {
  for (let i = 0; i < data.length; i++) {
    const text = document.createElement("a");
    container.appendChild(text);
    text.className = type;
    text.innerHTML = "# " + data[i];
  }
}
// Toggle project detail
function toggleProjectDetail(show, element) {
  element.style.display = show ? "flex" : "none";
  activeProjectImg = 0;
}
// Select carousel image
function getCarouselImage(pagination, element, images, index) {
  const bars = pagination.getElementsByTagName("div");

  for (let i = 0; i < images.length; i++) {
    if (i === index) {
      bars[i].classList.add("active");
    } else {
      bars[i].classList.remove("active");
    }
  }
  element.src = images[index];
}

// [ Animation ]
// Show text line by line
function animateShowText() {
  const page = document.getElementById("exp");
  const content = page.getElementsByClassName("company-content");

  for (let i = 0; i < content.length; i++) {
    const texts = content[i].getElementsByTagName("a");
    for (let j = 0; j < texts.length; j++) {
      texts[j].style.animation = `show 0.2s ${0.2 * (j + 1)}s forwards`;
    }
  }
}
