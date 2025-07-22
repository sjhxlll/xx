import { visit } from "unist-util-visit";
import { markdownImageConfig } from "../image-config.ts";

export function remarkImagesComponent() {
	return (tree) => {
		visit(tree, "image", (node) => {
			node.type = "mdxJsxFlowElement";
			node.name = "MarkdownImage";

			node.attributes = [
				{ type: "mdxJsxAttribute", name: "src", value: node.url },
				{ type: "mdxJsxAttribute", name: "alt", value: node.alt },
				{
					type: "mdxJsxAttribute",
					name: "quality",
					value: markdownImageConfig.quality,
				},
				{
					type: "mdxJsxAttribute",
					name: "sizes",
					value: markdownImageConfig.sizes,
				},
			];

			delete node.url;
			delete node.alt;
			delete node.title;
		});
	};
}
