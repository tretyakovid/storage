const popupWindowUploadFile = document.querySelector("#upload-popup");
const popupWindow = document.querySelector(".popup-window");
const showPopupBtn = document.querySelector(
  ".content__file-item-menu-delete-btn-icon"
);
const reloadBtn = document.querySelector(".content__file-item-menu-reload");
const uploadFileBtn = document.querySelector(".content__add-btn");
const popupWindowCloseBtns = document.querySelectorAll(".popup__close-btn");
const popupCancelBtns = document.querySelectorAll(".popup__cancel-btn");
const contentFilesList = document.querySelector(".content__files-list");
const popupConfirmBtn = document.querySelectorAll(".popup__confirm-btn");
const dropdown = document.querySelector(".popup__dropdown");
const dropdownMenu = document.querySelector(".popup__dropdown-menu");
const dropdownMenuItems = document.querySelectorAll(".dropdown-menu__item");
const fileInput = document.querySelector("#upload-file");
const fileList = document.querySelector(".popup__upload-file-list");
const popupInput = document.querySelector(".popup__input");
const contextMenu = document.querySelector("#context-menu");
const contextMenuAddFileBtn = document.querySelector(".context-menu__add-btn");
const cardContent = `
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="2"
                y="2"
                width="32"
                height="32"
                rx="16"
                fill="#F4EBFF"
              ></rect>
              <g clip-path="url(#clip0_220_13424)">
                <path
                  d="M17.9999 24.6666V11.3333M14.6666 24.6666V21.3333M14.6666 14.6666V11.3333M21.3333 24.6666V21.3333M21.3333 14.6666V11.3333M11.3333 14.6666H24.6666M11.3333 21.3333H24.6666M24.6666 21.4666V14.5333C24.6666 13.4132 24.6666 12.8532 24.4486 12.4253C24.2569 12.049 23.9509 11.743 23.5746 11.5513C23.1467 11.3333 22.5867 11.3333 21.4666 11.3333L14.5333 11.3333C13.4131 11.3333 12.8531 11.3333 12.4253 11.5513C12.0489 11.743 11.743 12.049 11.5512 12.4253C11.3333 12.8532 11.3333 13.4132 11.3333 14.5333L11.3333 21.4666C11.3333 22.5868 11.3333 23.1468 11.5512 23.5746C11.743 23.951 12.0489 24.2569 12.4253 24.4487C12.8531 24.6666 13.4131 24.6666 14.5333 24.6666H21.4666C22.5867 24.6666 23.1467 24.6666 23.5746 24.4487C23.9509 24.2569 24.2569 23.951 24.4486 23.5746C24.6666 23.1468 24.6666 22.5868 24.6666 21.4666Z"
                  stroke="#7F56D9"
                  stroke-width="1.33333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g>
              <rect
                class="popup__upload-icon"
                x="2"
                y="2"
                width="32"
                height="32"
                rx="16"
                stroke="#F9F5FF"
                stroke-width="4"
              ></rect>
              <defs>
                <clipPath id="clip0_220_13424">
                  <rect
                    width="16"
                    height="16"
                    fill="white"
                    transform="translate(10 10)"
                  ></rect>
                </clipPath>
              </defs>
            </svg>
            <div class="popup__upload-file-body">
              <h4 class="popup__upload-file-heading">Файл</h4>
              <span class="popup__upload-file-size">Неизвестный размер файла</span>
              <div class="popup__upload-file-progress">
                <div class="popup__upload-file-line">
                  <div class="popup__upload-file-line-now"></div>
                </div>
                <div class="popup__upload-file-counter">100%</div>
              </div>
            </div>
            <button class="popup__upload-file-delete-btn">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.3333 5.00002V4.33335C13.3333 3.39993 13.3333 2.93322 13.1517 2.5767C12.9919 2.2631 12.7369 2.00813 12.4233 1.84834C12.0668 1.66669 11.6001 1.66669 10.6667 1.66669H9.33333C8.39991 1.66669 7.9332 1.66669 7.57668 1.84834C7.26308 2.00813 7.00811 2.2631 6.84832 2.5767C6.66667 2.93322 6.66667 3.39993 6.66667 4.33335V5.00002M8.33333 9.58335V13.75M11.6667 9.58335V13.75M2.5 5.00002H17.5M15.8333 5.00002V14.3334C15.8333 15.7335 15.8333 16.4336 15.5608 16.9683C15.3212 17.4387 14.9387 17.8212 14.4683 18.0609C13.9335 18.3334 13.2335 18.3334 11.8333 18.3334H8.16667C6.76654 18.3334 6.06647 18.3334 5.53169 18.0609C5.06129 17.8212 4.67883 17.4387 4.43915 16.9683C4.16667 16.4336 4.16667 15.7335 4.16667 14.3334V5.00002"
                  stroke="#667085"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button> `;
const fileContent = `
<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="40px" height="32px"><path d="M4,19V5c0-1.657,1.343-3,3-3h7l6,6v11c0,1.657-1.343,3-3,3H7C5.343,22,4,20.657,4,19z" opacity=".35"/><path d="M14,6V2l6,6h-4C14.895,8,14,7.105,14,6z"/></svg>
            <h4 class="content__file-item-title">Файл</h4>
            <span class="content__file-item-downloads-count">0</span>
            <span class="content__file-item-date">16/02/2021</span>
            <div class="content__file-item-menu">
              <a href="#" class="content__file-item-menu-download-link" download="">
                <img class="content__file-item-menu-download-btn-icon" src="./assets/icons/download.svg" alt="download">
              </a>
              <button class="content__file-item-menu-delete-btn">
                <img class="content__file-item-menu-delete-btn-icon" src="./assets/icons/delete.svg" alt="delete">
              </button>
            </div>`;
function closePopupWindow(popupSelector) {
  popupSelector.classList.remove("popup-window--active");
}
function openPopupWindow(popupSelector) {
  popupSelector.classList.add("popup-window--active");
  window.addEventListener("click", (e) => {
    closePopupWindowClick(e, popupSelector);
  });
}

function closePopupWindowClick(e, popupWindow) {
  if (e.target == popupWindow) {
    closePopupWindow(popupWindow);
  }
}

function closeDropdownMenu() {
  dropdownMenu.classList.remove("popup__dropdown-menu--active");
}

function openDropdownMenu() {
  dropdownMenu.classList.toggle("popup__dropdown-menu--active");
}

function returnFileSize(number) {
  if (number < 1024) {
    return number + "bytes";
  } else if (number > 1024 && number < 1048576) {
    return (number / 1024).toFixed(1) + "KB";
  } else if (number > 1048576) {
    return (number / 1048576).toFixed(1) + "MB";
  }
}

fileInput.addEventListener("change", (e) => {
  const card = document.createElement("div");
  card.classList.add("popup__upload-file");
  card.innerHTML = cardContent;

  fileList.insertAdjacentElement("afterbegin", card);
  const fileName = document.querySelector(".popup__upload-file-heading");
  const fileSize = document.querySelector(".popup__upload-file-size");
  fileName.textContent = e.target.files[0].name;
  fileSize.textContent = returnFileSize(e.target.files[0].size);
  const deleteUploadFileBtn = document.querySelector(
    ".popup__upload-file-delete-btn"
  );
  const uploadFile = document.querySelector(".popup__upload-file");
  deleteUploadFileBtn.addEventListener("click", function () {
    uploadFile.remove();
  });
});

popupConfirmBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    closePopupWindow(e.target.closest(".popup-window"));
    const newFile = document.createElement("li");
    newFile.classList.add("content__file-item");
    newFile.innerHTML = fileContent;
    contentFilesList.insertAdjacentElement("beforeend", newFile);
    const deleteFileBtns = document.querySelectorAll(
      ".content__file-item-menu-delete-btn"
    );
    let fileTitle = newFile.querySelector(".content__file-item-title");
    fileTitle.innerHTML = popupInput.value;
    document
      .querySelectorAll(".popup__upload-file-list div")
      .forEach((item) => {
        item.remove();
      });
    if (popupInput.value == "") {
      fileTitle.innerHTML = "Без названия";
    }
    popupInput.value = "";
    deleteFileBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        btn.closest("li").remove();
      });
    });
    e.target.disabled = true;
    setTimeout(() => (e.target.disabled = false), 1000);
  });
});
dropdownMenuItems.forEach((item) => {
  item.addEventListener("click", () => {
    dropdown.querySelector("span").textContent = item.textContent;
    dropdown.querySelector("#language").value = item.id;
  });
});

dropdown.addEventListener("click", function () {
  openDropdownMenu();
});

uploadFileBtn.addEventListener("click", () => {
  openPopupWindow(popupWindowUploadFile);
});

popupWindowCloseBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    closePopupWindow(e.target.closest(".popup-window"));
  });
});

popupCancelBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    closePopupWindow(e.target.closest(".popup-window"));
  });
});

reloadBtn.addEventListener("click", function () {
  window.location.reload();
});
document.oncontextmenu = function () {
  return false;
};
document.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  contextMenu.style.top = `${event.clientY}px`;
  contextMenu.style.left = `${event.clientX}px`;
  contextMenu.classList.add("context-menu--active");
});
document.addEventListener("click", (event) => {
  if (event.button !== 2) {
    contextMenu.classList.remove("context-menu--active");
  }
});

contextMenu.addEventListener("click", (event) => {
  event.stopPropagation();
});
contextMenuAddFileBtn.addEventListener("click", () => {
  openPopupWindow(popupWindowUploadFile);
});
