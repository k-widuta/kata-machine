interface Node {
    val: any;
    left: Node | null;
    right: Node | null;
}

export class TreeFormatter {
    private padding: number;

    constructor() {
        this.padding = 2; // minimum number of horizontal spaces between two node val
    }

    topDown(root: Node | null): string {
        let lines = this.buildLines(root);
        return lines.slice(1).join("\n");
    }

    private indent(lines: string[], margin: number): number {
        if (margin >= 0) return margin;
        let spaces = " ".repeat(-margin);
        for (let i = 0; i < lines.length; i++) {
            lines[i] = spaces + lines[i];
        }
        return 0;
    }

    private merge(left: string[], right: string[]): string[] {
        let minSize = Math.min(left.length, right.length);
        let offset = 0;
        for (let i = 0; i < minSize; i++) {
            offset = Math.max(offset, left[i].length + this.padding - right[i].replace(/\S.*/, "").length);
        }
        this.indent(right, -this.indent(left, offset));
        for (let i = 0; i < minSize; i++) {
            left[i] += right[i].substring(left[i].length);
        }
        if (right.length > minSize) {
            left.push(...right.slice(minSize));
        }
        return left;
    }

    private buildLines(node: Node | null): string[] {
        if (node === null) return [];
        let lines = this.merge(this.buildLines(node.left), this.buildLines(node.right));
        let half = String(node.val).length / 2;
        let i = half;
        if (lines.length > 0) {
            let line;
            i = lines[0].indexOf("*");
            if (node.right === null) {
                line = " ".repeat(i) + "┌─┘";
                i += 2;
            } else if (node.left === null) {
                line = " ".repeat(i = this.indent(lines, i - 2)) + "└─┐";
            } else {
                let dist = lines[0].length - 1 - i;
                line = `${" ".repeat(i)}┌${"─".repeat(dist / 2 - 1)}┴${"─".repeat((dist - 1) / 2)}┐`;
                i += dist / 2;
            }
            lines[0] = line;
        }
        lines.unshift(" ".repeat(this.indent(lines, i - half)) + node.val);
        lines.unshift(" ".repeat(i + Math.max(0, half - i)) + "*");
        return lines;
    }
}

