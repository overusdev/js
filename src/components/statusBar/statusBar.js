export class statusBarComponent {
    constructor(items) {
        this.items = items;
    }

    getTemplate() {
        return createStatusBarMarkUp(this.items);
    }
}

export const createStatusBarMarkUp = (items) => {
    return items.map((i) => 
        `
        <div class="status-bar">
            <ul class="status-bar__list">
                <li class="status-bar__item">${i.title}</li>
            </ul>
        </div>
        `
    ).join('');
};