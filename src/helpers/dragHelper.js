export const dragenter = (ev, id) => {
    document.getElementById(id).style.opacity = "0.4";
};
  
export const dragstart = (ev, id) => {
    let element = document.getElementById(id);
    element.style.opacity = "0.5";
    ev.dataTransfer.dropEffect = "move";
    ev.dataTransfer.setData("text", id);
    element.style.opacity = "0.5";
};
  
export const dragend = (ev, id) => {
    ev.preventDefault();
    document.getElementById(id).style.opacity = "1";
};
  
export const dragleave = (ev, id) => {
    ev.preventDefault();
    document.getElementById(id).style.opacity = "1";
};

export const dragover= (ev, id) => {
    ev.preventDefault();
};
  
export const drop = (ev, id, processDrop) => {
    document.getElementById(id).style.opacity = "1";
    let itemid = ev.dataTransfer.getData("text");
    processDrop(id, itemid);
};