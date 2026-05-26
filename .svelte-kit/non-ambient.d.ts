
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	type MatcherParam<M> = M extends (param : string) => param is (infer U extends string) ? U : string;

	export interface AppTypes {
		RouteId(): "/";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>
		};
		Pathname(): "/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/.DS_Store" | "/assets/.DS_Store" | "/assets/.gitkeep" | "/assets/README.md" | "/assets/comet-bg.gif" | "/assets/mascot/.DS_Store" | "/assets/mascot/eeveelutions-group.png" | "/assets/mascot/umbreon-cosmic.jpg" | "/assets/mascot/umbreon-eye.gif" | "/assets/mascot/umbreon-rings.gif" | "/assets/mew-sprite.png" | "/assets/moon-petals.gif" | "/assets/sprites/.DS_Store" | "/assets/sprites/lugia-sprite.png" | "/assets/sprites/mew-sprite.png" | "/assets/sprites/umbreon-shiny.png" | "/assets/sprites/umbreon-sprite.png" | "/favicon.png" | string & {};
	}
}