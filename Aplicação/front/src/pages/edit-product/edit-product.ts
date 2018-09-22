import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CameraOptions, Camera } from '@ionic-native/camera';
import { DomSanitizer } from '@angular/platform-browser';
import { ProductProvider } from '../../providers/product/product';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the CreateProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-product',
  templateUrl: 'edit-product.html',
})
export class EditProductPage {
  product = this.navParams.get('product');
  formNumber = 1;
  images: Array<any> = [];
  productForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private camera: Camera,
    public dom: DomSanitizer,
    private formBuilder: FormBuilder,
    private productProvider: ProductProvider
  ) {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
    this.product.images.forEach(element => {
      this.images.push(`http://localhost:8080/storage/images/${element.hash_name}`);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateProductPage');
  }

  protected getImage(key) {
    const options: CameraOptions = {
      quality: 40,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      sourceType: this.camera.PictureSourceType.CAMERA,
      correctOrientation: false
    }

    this.camera.getPicture(options).then(response => {
      this.images[key] =response;
    });
  }

  nextProduct() {
    this.formNumber = 2;
    this.productForm.controls['name'].setValue(this.product.name);
    this.productForm.controls['description'].setValue(this.product.description);
  }

  saveProduct() {
    const form = {
      name: this.productForm.value['name'],
      description: this.productForm.value['description']
    }

    this.productProvider.editProduct(this.product.id, form).subscribe(res => {
      console.log(res);
      //this.productProvider.createImages(this.images, {id: res.data.id});
      //this.navCtrl.pop();
    }, err => console.log(JSON.stringify(err)));
  }

}
