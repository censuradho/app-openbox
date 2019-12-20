## gerar icones

- no site ape tools

descompactar os arquivos gerados, na pasta android/app/src/main/res/

No arquivo AndroidManifest.xml da mesma pasta, alterar a propriedade **android:icon** para **@drawable/icon**.

na pasta android/app/src/main/res/values, alterar o arquivo **strings.xml** para o nome do App.

criar o arquivo **colors.xml** no mesmo diretório, com o seguinte conteúdo:

<?xml version="1.0" encoding="utf-8"?>

<resources>
  <color name="primary">#fff</color>
</resources>

na pasta android/app/src/main/res/drawable, criar o arquivo **splashScreen.xml** com o seguinte conteúdo:

<?xml version="1.0" encoding="utf-8"?>
<layer-list xmlns:android="http://schemas.android.com/apk/res/android">
  <item android:drawable="@color/primary" />
  <item 
    android:width="200dp"
    android:height="200dp"
    android:drawable="@drawable/icon"
    android:gravity="center"
  />
</layer-list>

no arquivo AndroidManifest.xml, adicionar o seguinte conteúdo:

<item name="android:windowBackground">
    @drawable/splashScreen
</item>
