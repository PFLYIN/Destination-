const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Behaviors.scrollto,
		C3.Behaviors.solid,
		C3.Plugins.Keyboard,
		C3.Plugins.Mouse,
		C3.Plugins.Tilemap,
		C3.Behaviors.destroy,
		C3.Behaviors.Bullet,
		C3.Behaviors.Flash,
		C3.Behaviors.Anchor,
		C3.Plugins.Audio,
		C3.Plugins.Spritefont2,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Behaviors.Platform.Cnds.IsOnFloor,
		C3.Plugins.Sprite.Cnds.IsAnimPlaying,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Behaviors.Platform.Cnds.IsMoving,
		C3.Plugins.System.Cnds.Else,
		C3.Plugins.System.Cnds.Compare,
		C3.Behaviors.Platform.Exps.VectorX,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Behaviors.Platform.Cnds.OnJump,
		C3.Behaviors.Platform.Cnds.IsFalling,
		C3.Behaviors.Platform.Cnds.OnFall,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Cnds.OnAnimFinished,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.System.Acts.ResetGlobals,
		C3.Plugins.Spritefont2.Cnds.IsVisible,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.Spritefont2.Acts.SetVisible,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Behaviors.Platform.Acts.SimulateControl,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Behaviors.solid.Acts.SetEnabled,
		C3.Behaviors.Platform.Acts.SetEnabled,
		C3.Plugins.System.Acts.SubVar,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.System.Exps.random,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.System.Exps.layoutwidth,
		C3.Behaviors.Bullet.Acts.SetAngleOfMotion,
		C3.Plugins.Mouse.Cnds.OnObjectClicked,
		C3.Plugins.Mouse.Cnds.IsOverObject,
		C3.Plugins.Mouse.Cnds.OnAnyClick
	];
};
self.C3_JsPropNameTable = [
	{PlanoDeFundoEmBlocos: 0},
	{PlanoDeFundoEmBlocos2: 0},
	{vida: 0},
	{Plataforma: 0},
	{CentrarEm: 0},
	{JogadorLoren: 0},
	{Sólido: 0},
	{PlanoDeFundoEmBlocos3: 0},
	{Teclado: 0},
	{MagoRadhan: 0},
	{ENTRADA: 0},
	{Mouse: 0},
	{PlanoDeFundoEmBlocos4: 0},
	{Mosaico2: 0},
	{PlanoDeFundoEmBlocos5: 0},
	{Mosaico3: 0},
	{Sprite: 0},
	{Sprite2: 0},
	{Sprite3: 0},
	{Sprite4: 0},
	{PlanoDeFundoEmBlocos6: 0},
	{PlanoDeFundoEmBlocos8: 0},
	{Relampago: 0},
	{DestroyOutsideLayout: 0},
	{Bullet: 0},
	{Sprite5: 0},
	{Direcao: 0},
	{Piscar: 0},
	{LANÇA: 0},
	{Platform: 0},
	{Solid: 0},
	{Flash: 0},
	{ESCUDO: 0},
	{Sensor_para_Direita: 0},
	{Sensor_para_Esquerda: 0},
	{ONI: 0},
	{Chão: 0},
	{FANTASMA_DE_BRANCO: 0},
	{minotauro: 0},
	{TiledBackground2: 0},
	{Sprite7: 0},
	{Anchor: 0},
	{Vida_HUD: 0},
	{Audio: 0},
	{black_text: 0},
	{SpriteFont: 0},
	{SpriteFont2: 0},
	{TiledBackground: 0},
	{SpriteFont3: 0},
	{DENOVO: 0},
	{NAO: 0}
];

self.InstanceType = {
	PlanoDeFundoEmBlocos: class extends self.ITiledBackgroundInstance {},
	PlanoDeFundoEmBlocos2: class extends self.ITiledBackgroundInstance {},
	JogadorLoren: class extends self.ISpriteInstance {},
	PlanoDeFundoEmBlocos3: class extends self.ITiledBackgroundInstance {},
	Teclado: class extends self.IInstance {},
	MagoRadhan: class extends self.ISpriteInstance {},
	ENTRADA: class extends self.ISpriteInstance {},
	Mouse: class extends self.IInstance {},
	PlanoDeFundoEmBlocos4: class extends self.ITiledBackgroundInstance {},
	Mosaico2: class extends self.ITilemapInstance {},
	PlanoDeFundoEmBlocos5: class extends self.ITiledBackgroundInstance {},
	Mosaico3: class extends self.ITilemapInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	PlanoDeFundoEmBlocos6: class extends self.ITiledBackgroundInstance {},
	PlanoDeFundoEmBlocos8: class extends self.ITiledBackgroundInstance {},
	Relampago: class extends self.ISpriteInstance {},
	Sprite5: class extends self.ISpriteInstance {},
	LANÇA: class extends self.ISpriteInstance {},
	ESCUDO: class extends self.ISpriteInstance {},
	Sensor_para_Direita: class extends self.ISpriteInstance {},
	Sensor_para_Esquerda: class extends self.ISpriteInstance {},
	ONI: class extends self.ISpriteInstance {},
	Chão: class extends self.ISpriteInstance {},
	FANTASMA_DE_BRANCO: class extends self.ISpriteInstance {},
	minotauro: class extends self.ISpriteInstance {},
	TiledBackground2: class extends self.ITiledBackgroundInstance {},
	Sprite7: class extends self.ISpriteInstance {},
	Vida_HUD: class extends self.ISpriteInstance {},
	Audio: class extends self.IInstance {},
	black_text: class extends self.ISpriteInstance {},
	SpriteFont: class extends self.ISpriteFontInstance {},
	SpriteFont2: class extends self.ISpriteFontInstance {},
	TiledBackground: class extends self.ITiledBackgroundInstance {},
	SpriteFont3: class extends self.ISpriteFontInstance {},
	DENOVO: class extends self.ISpriteFontInstance {},
	NAO: class extends self.ISpriteFontInstance {}
}