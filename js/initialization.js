//Khoi tao danh sach san pham
function createProduct() {
    if (localStorage.getItem('products') == null) {
        let products = [{
            id: 1,
            status: 1, 
            title: 'Samba OG Sporty & Rich White Black',
            img: './assets/img/products/adidas1.png',
            category: 'Adidas',
            price: 3300000,
            desc: 'Thiết kế của giày dép adidas Samba OG Sporty & Rich White Black được đặc trưng bởi con lăn 3-Stripes có màu navy tương phản chạy dọc trên phần trên. Đây là một đặc điểm nổi bật của thiết kế adidas và cung cấp một điểm nhấn màu sắc dịu dàng trên nền da trắng. Bên cạnh con lăn 3-Stripes, vè mũi được chế tác từ vải suede tonal thêm mộtcontrast textural.'
        },
        {
            id: 2,
            status: 1, 
            title: 'Giày Nike Air Max Excee - Trắng',
            img: './assets/img/products/Nike.png',
            category: 'Nike',
            price: 3559000,
            desc: 'Làm mới phong cách của bạn với Giày Sneaker Nữ Nike Air Max Excee! Thiết kế họa tiết paisley nổi bật kết hợp với các tông màu trung tính cổ điển, tạo nên vẻ ngoài vượt thời gian. Lấy cảm hứng từ Nike Air Max 90, đôi giày này mang đến một biến tấu mới cho biểu tượng - với các đường nét thiết kế kéo dài và tỷ lệ khác biệt.'
        },
        {
            id: 3,
            status: 1, 
            title: 'Giày  Nike Air Zoom Pegasus 41 ',
            img: './assets/img/products/Nike2.png',
            category: 'Nike',
            price: 4209000,
            desc: 'Giày Chạy Bộ Nữ Nike Air Zoom Pegasus 41 sở hữu bọt ReactX - phản hồi năng lượng cao hơn 13% so với công nghệ React trước đây, cho bạn trải nghiệm chạy đường dài đầy năng lượng! Thêm vào đó, lưới kỹ thuật cải tiến ở phần thân giày giúp giảm trọng lượng và tăng độ thoáng khí.'
        },
        {
            id: 4,
            status: 1, title: 'Giày Nike Air Max Portal - Be',
            img: './assets/img/products/Nike3.png',
            category: 'Nike',
            price: 3559000,
            desc: 'Nâng tầm phong cách của bạn với Giày Sneaker Nữ Nike Air Max Portal! Thiết kế là sự kết hợp hoàn hảo giữa phong cách "bụi bặm" và sự thanh thoát, kết hợp đế giày to từ thập niên 2000 với phần thân giày tối giản của thiết kế hiện đại. Đệm giữa siêu êm ái để bạn có thể diện hàng ngày.'
        },
        {
            id: 5,
            status: 1, 
            title: 'Giày adilette 22',
            img: './assets/img/products/adidas3.png',
            category: 'Adidas',
            price: 1400000,
            desc: 'Xuyên suốt quá trình thiết kế, dép adilette 22 sử dụng chất liệu EVA làm từ bã mía sinh học tự nhiên tạo nên lớp đệm êm ái và ôm theo hình dáng bàn chân bạn cho cảm giác cực kỳ thoải mái. Thiết kế nhấp nhô độc đáo lấy cảm hứng từ bản đồ địa hình 3D, cải biên mẫu dép adilette classic trở thành item thường ngày dành cho những nhà tiên phong du hành liên sao.'
        },

        {
            id: 6,
            status: 1, 
            title: 'Giày Samba OG',
            img: './assets/img/products/New_Balance1',
            category: 'Adidas',
            price: 2700000,
            desc: 'Ra mắt vào thập niên 1950 là một mẫu giày trainer bóng đá trong nhà, giày adidas Samba từ đó đã trở thành một item classic. Đôi giày Samba OG này tôn vinh thiết kế kinh điển ấy với đế gum bằng cao su và 3 Sọc răng cưa. Các chi tiết thiết kế tinh tế như lớp lót đầy màu sắc và kết cấu đục lỗ nâng tầm outfit của bạn.'
        },

        {
            id: 7,
            status: 1, 
            title: ' Em Nike Flex Plus 2 Se - Hồng',
            category: 'Nike',
            img: './assets/img/products/Nike4.png',
            price: 979440,
            desc: 'Nike Flex Plus 2 được thiết kế để trẻ em có thể chạy nhảy và vui chơi một cách thoải mái. Hệ thống dây giày cải tiến giúp các bé mang vào một cách dễ dàng. Cấu tạo thoáng khí và siêu bền bỉ được thiết kế riêng biệt cho những bàn chân nhỏ. Bên cạnh đó, các nhà thiết kế còn bổ sung lớp đệm siêu linh hoạt giúp cho mọi chuyển động của bé đều có cảm giác tốt nhất và tự nhiên nhất.'
        },

        {
            id: 8,
            status: 1, 
            title: 'Dép Quai Ngang Nữ Nike Victori One Osaka - Đen',
            img: './assets/img/products/Nike5.png',
            category: 'Nike',
            price: 593600,
            desc: 'Từ bãi biển đến khán đài, Nike Victori One hoàn thiện một thiết kế cổ điển, là đôi dép mà bạn không thể nào bỏ qua. Mang đến sự nhẹ nhàng và dễ phối hợp với mọi trang phục, dép có lớp đệm mới mềm hơn tạo cảm giác thoải mái cho cả ngày dài.'
        },

        {
            id: 9,
            status: 1, 
            title: 'Giày Chạy Bộ Nam Nike Air Zoom Pegasus 40 - Xám',
            img: './assets/img/products/Nike6.png',
            category: "Nike",
            price: 2423400,
            desc: 'Tận hưởng những bước chạy nhẹ nhàng, thoải mái để giúp bạn hoàn thành mục tiêu của mình. Phiên bản này của Nike vẫn giữ nguyên độ đàn hồi vừa vặn nhưng tăng cường sự thoải mái hơn ở những khu vực như vòm và ngón chân.',
        },  
        {
            id: 10,
            status: 1, 
            title: 'Giày Bóng Rổ Nam Nike Jordan Tatum 1 Pf - Đen',
            img: './assets/img/products/Nike7.png',
            category: "Nike",
            price: 2082640,
            desc: 'Giày Bóng Rổ Nam Nike Jordan Tatum 1 PF ra đời với mục đích mang đến sự bền bỉ vượt trội, đồng hành cùng bạn đến giây phút cuối cùng của trận đấu. ',
        },
        {
            id: 11,
            status: 1, 
            title: 'Giày Bóng Rổ Anthony Edwards 1 Low',
            img: './assets/img/products/adidas2.png',
            category: "Adidas",
            price: 2600000,
            desc: 'Hãy mang giày theo phong cách của một trong những siêu sao mới nổi trong làng bóng rổ. Đôi giày sneaker Signature đến từ adidas Basketball và Anthony Edwards này ra đời dành cho những cầu thủ bóng rổ xuất sắc nhất. Đế giữa kết hợp đệm BOOST và Lightstrike siêu nhẹ và mang đến khả năng hoàn trả năng lượng vượt trội cho những chuyển động bùng nổ nhất.',
        }, 
        {
            id: 12,
            status: 1, 
            title: 'MLB - Giày sandals unisex đế thấp Chunky Runner',
            img: './assets/img/products/MLB1.png',
            category: "MLB",
            price: 2490000,
            desc: 'Đôi sandals Chunky Runner là sự hòa quyện tuyệt vời giữa sự thoải mái và phong cách đường phố, mang đến cho bạn những bước đi đầy tự tin và nổi bật. ',
        }, 
        {
            id: 13,
            status: 1, 
            title: 'Giày Chạy Bộ Nữ New Balance Fresh Foam X 1080V12 - Vàng',
            img: './assets/img/products/New_Balance2.png',
            category: "New Balance",
            price: 2047500,
            desc: 'New Balance 1080 v12 dành cho nữ là một đôi giày chạy bộ trung tính và phù hợp để tối ưu những cuộc chạy bộ của bạn. Đệm Fresh Foam mang lại cảm giác mềm mại và nhẹ nhàng, cùng lót giày Ortholite mang lại sự thoải mái hơn khi chạy .',
        }, 
        {
            id: 13,
            status: 1, 
            title: 'Giày Slip On Gucci GC MicroGuccissima Espadrille Màu Đen',
            img: './assets/img/products/gucci2.png',
            category: "Gucci",
            price: 9800000,
            desc: 'Giày Slip On Gucci GC MicroGuccissima Espadrille Màu Đen là đôi giày cao cấp dành cho cả nam và nữ đến từ thương hiệu Gucci nổi tiếng. Đôi giày mang thiết kế trẻ trung hiện đại, cùng chất liệu cao cấp giúp người dùng cảm thấy thoải mái khi đi lên chân và có một phong cách thời trang thời thượng.',
        }, 
        {
            id: 14,
            status: 1, 
            title: 'Giày Sneaker Gucci 386750A38309071 Phối Màu Size 7',
            img: './assets/img/products/gucci1.png',
            category: "Gucci",
            price: 13412000,
            desc: 'Được sáng lập bởi Guccio Gucci (1881-1953) tại Florence (Ý), Gucci được xem là một trong những thương hiệu thời trang nổi tiếng và được yêu thích trên khắp thế giới. Bí quyết thành công của Gucci chính là nét hài hòa qua sự kết hợp của các sản phẩm.',
        }, 
        {
            id: 15,
            status: 1, 
            title: 'Áo Thun Nữ Nike Asw Chill Knit Slim Cropped - Trắng',
            img: './assets/img/products/ao_nike.png',
            category: "Nike",
            price: 1229000,
            desc: 'Khám phá Áo Thun Nữ Nike Asw Chill Knit Slim Cropped kết hợp hoàn hảo giữa phong cách, tính năng thoải mái và linh hoạt. Chất liệu jerrsey mượt mà mang lại khả năng co giãn vượt trội cho bạn tự tin trong từng chuyển động.',
        }, 
        {
            id: 16,
            status: 1, 
            title: 'Giày Sneaker Trẻ Em New Balance 574 Hook & Loop - Đen',
            img: './assets/img/products/New_Balance1.png',
            category: "New Balance",
            price: 883350,
            desc: 'New Balance 574 Hook & Loop không chỉ là một đôi giày, mà là một tuyên ngôn về phong cách vượt thời gian, sự thoải mái bền bỉ, và tinh thần tự do khám phá.',
        }, 
        {
            id: 17,
            status: 1, 
            title: 'Ba Lô Thể Thao Puma Academy Logo Ao - Đen',
            img: './assets/img/products/balo_puma.png',
            category: "Puma",
            price: 999000,
            desc: 'Ba Lô Thể Thao Puma Academy sở hữu thiết kế nhiều ngăn, giúp bạn dễ dàng sắp xếp vật dụng ngăn nắp. Dây đeo và phân lưng balo có đệm, dễ chịu khi sử dụng suốt ngày dài.',
        }, 
        {
            id: 18,
            status: 1, 
            title: 'Găng Tay Thủ Môn Nike Goalkeeper Match - Trắng',
            img: './assets/img/products/gang_tay_nike.png',
            category: "Nike",
            price: 899000,
            desc: 'Được thiết kế với lớp đệm latex foam có khả năng hấp thụ tác động mỗi khi bạn bắt bóng, mang lại sự an toàn tối ưu. Đặc biệt, thiết kế cổ tay rộng rãi giúp giữ cho đôi găng tay của bạn luôn vừa vặn và thoải mái suốt trận đấu.',
        }, 
        {
            id: 19,
            status: 1, 
            title: 'Ba Lô adidas City Explorer',
            img: './assets/img/products/balo_adidas1.png',
            category: "Adidas",
            price: 950000,
            desc: 'Khám phá phố phường thật phong cách với chiếc ba lô adidas này. Lấy cảm hứng từ trang phục ngoài trời nhưng được thiết kế dành cho hành trình phiêu lưu nơi thành thị, chiếc ba lô này có mọi thứ bạn cần và không gì thừa thãi. ',
        }, 
        {
            id: 20,
            status: 1, 
            title: 'Quần adidas Z.N.E. Mới',
            img: './assets/img/products/Quan_adidas1.png',
            category: "Adidas",
            price: 2000000,
            desc: 'Tôn vinh sức mạnh đồng đội với chiếc quần adidas này. Bất kể bạn đang tập luyện hay theo dõi trận đấu, chất vải spacer dệt kim đôi sẽ chặn đứng hơi lạnh để bạn có thể tập trung kết nối với đồng đội.',
        }, 
        {
            id: 21,
            status: 1, 
            title: 'Giày sneakers unisex cổ thấp Roma 24',
            img: './assets/img/products/puma2.png',
            category: "Puma",
            price: 2199000,
            desc: 'Sinh ra từ năm 1968 để ăn mừng chức vô địch Euro của Italia, đôi giày sneakers Roma nhanh chóng trở thành biểu tượng, từ sân đấu bùng nổ ra phố phường.',
        }, 
        {
            id: 22,
            status: 1, 
            title: 'Giày sneakers unisex cổ thấp Puma x One Piece Style Code: 396525',
            img: './assets/img/products/puma1.png',
            category: "Puma",
            price: 2699000,
            desc: 'Đánh thức sức mạnh hắc ám bên trong bạn với bộ sưu tập giày Puma x One Piece được lấy cảm hứng từ nhân vật Blackbeard – kẻ thống trị bóng đêm! Với thiết kế tinh tế, êm ái nhờ vào thiết kế lót đệm giữa và phần đế chắc chắn, đôi giày sẵn sàng đồng hành cùng bạn trên mọi hành trình.',
        }, 
        {
            id: 23,
            status: 1, 
            title: 'MLB - Giày sneakers unisex cổ thấp Chunky Liner Metal',
            img: './assets/img/products/MLB2.png',
            category: "MLB",
            price: 3790000,
            desc: 'Được thiết kế với chi tiết logo đội bóng chày cỡ lớn trên nền gam màu nhẹ nhàng mang đến vẻ đẹp ngọt ngào, trẻ trung cho phái nữ, đây không chỉ là một đôi giày đơn thuần, mà còn là item tô điểm thêm sắc màu cho cuộc sống, cũng như khẳng định phong cách thời trang độc đáo của bạn!',
        }, 
        ]
        localStorage.setItem('products', JSON.stringify(products));
    }
}

// Create admin account 
function createAdminAccount() {
    let accounts = localStorage.getItem("accounts");
    if (!accounts) {
        accounts = [];
        accounts.push({
            fullname: "Mã Đức Minh",
            phone: "hgbaodev",
            password: "123456",
            email: 'musicanime2501@gmail.com',
            status: 1,
            join: new Date(),
            cart: [],
            userType: 1
        })
        accounts.push({
            fullname: "Trần Thanh Hiếu",
            phone: "0123456789",
            password: "123456",
            address: '',
            email: '',
            status: 1,
            join: new Date(),
            cart: [],
            userType: 1
        })
        localStorage.setItem('accounts', JSON.stringify(accounts));
    }
}

window.onload = createProduct();
window.onload = createAdminAccount();