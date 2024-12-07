// view.ts
import { WorkspaceLeaf, MarkdownView } from 'obsidian';
import { CalloutMessagePlugin } from './main';  // 引用插件中的主类

// 定义视图类型的唯一标识
export const VIEW_TYPE_CALLOUT_MESSAGES = "callout-messages-view";

// 创建一个自定义视图：显示 Callout 消息
export class CalloutMessagesView extends MarkdownView {
    plugin: CalloutMessagePlugin;

    constructor(leaf: WorkspaceLeaf, plugin: CalloutMessagePlugin) {
        super(leaf);
        this.plugin = plugin;
    }

    // 获取视图类型
    getViewType(): string {
        return VIEW_TYPE_CALLOUT_MESSAGES;
    }

    // 获取视图的显示名称
    getDisplayText(): string {
        return 'Callout Messages';
    }

    // 当视图打开时调用
    async onOpen() {
        const container = this.containerEl.children[1];
        container.empty();  // 清空容器

        const messages = this.plugin.settings.messages;  // 获取消息数据
        Object.keys(messages).forEach((calloutId) => {
            const message = messages[calloutId];
            // 将每个消息显示在视图中
            container.createEl('div', { text: `Callout ${calloutId}: ${message}` });
        });
    }

    // 关闭视图时清理资源
    async onClose() {
        // 清理操作（可选）
    }
}

// 在创建 Callout 的相关函数中添加
function createCalloutIcon(calloutEl) {
    const iconEl = document.createElement('div');
    iconEl.className = 'callout-icon';
    // 设置图标内容（可以是 SVG 或其他图标形式）
    iconEl.innerHTML = `<svg>...</svg>`; // 添加您的图标 SVG
    
    // 添加点击事件处理
    iconEl.addEventListener('click', (event) => {
        event.stopPropagation();
        // 处理图标点击事件
    });
    
    calloutEl.appendChild(iconEl);
}

// 在创建 Callout 的地方调用
function createCallout() {
    // 现有的 callout 创建代码...
    const calloutEl = document.createElement('div');
    calloutEl.className = 'callout';
    
    createCalloutIcon(calloutEl);
    // 其他现有代码...
}
